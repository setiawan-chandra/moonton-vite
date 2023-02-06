<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SubscriptionPlan;
use App\Models\UserSubscription;
use Auth;
use Carbon\Carbon;
use Str;
use Midtrans;

class SubscriptionPlanController extends Controller
{
    public function __construct()
    {
        // Set your Merchant Server Key
        \Midtrans\Config::$serverKey = env('MIDTRANS_SERVERKEY');
        // Set to Development/Sandbox Environment (default). Set to true for Production Environment (accept real transaction).
        \Midtrans\Config::$isProduction = env('MIDTRANS_PRODUCTION');
        // Set sanitization on (default)
        \Midtrans\Config::$isSanitized = env('MIDTRANS_SANITIZE');
        // Set 3DS transaction for credit card to true
        \Midtrans\Config::$is3ds = env('MIDTRANS_3DS');
    }
    public function index()
    {
        $subscriptionPlans = SubscriptionPlan::all();

        return inertia('User/Dashboard/SubscriptionPlan/Index', [
            'subscriptionPlans' => SubscriptionPlan::all(),
            'userSubscription' => null,
        ]);
    }

    public function userSubscribe(Request $request, SubscriptionPlan $subscriptionPlan)
    {
        $data = [
            'user_id' => Auth::id(),
            'subscription_plan_id' => $subscriptionPlan->id,
            'price' => $subscriptionPlan->price,
            'payment_status' => 'pending',
        ];

        $userSubscription = UserSubscription::create($data);

        $params = [
            'transaction_details' => [
                'order_id' => $userSubscription->id.'-'.Str::random(5),
                'gross_amount' => $userSubscription->price
            ]
        ];

        $snapToken = \Midtrans\Snap::getSnapToken($params);

        $userSubscription->update([
            'snap_token' => $snapToken
        ]);

        return inertia('User/Dashboard/SubscriptionPlan/Index', [
            'userSubscription' => $userSubscription,
        ]);
    }
}