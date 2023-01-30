<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SubscriptionPlan;

class SubscriptionPlanController extends Controller
{
    public function index()
    {
        $subscriptionPlans = SubscriptionPlan::all();
        return inertia('User/Dashboard/SubscriptionPlan/Index', [
            'subscriptionPlans' => SubscriptionPlan::all(),
        ]);
    }
}
