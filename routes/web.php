<?php

use App\Http\Controllers\ProfileController as OwnerProfileController;
use App\Http\Controllers\Admin\ProfileController as AdminProfileController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ApiController;
use App\Http\Controllers\RespondentController;
use App\Http\Controllers\OwnerContoller;
use App\Http\Controllers\CityHeavenController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Flow;

// owner
require __DIR__.'/auth.php';

// admin
Route::prefix('admin')->name('admin.')->group(function(){
    Route::middleware(['auth:admin', 'verified'])->group(function () {
        // Route::get('/dashboard', fn() => Inertia::render('Admin/Dashboard'))->name('dashboard');
        Route::get('/users', [AdminController::class, 'getUserList'])->name('dashboard');

        Route::get('/user', [AdminController::class, 'create'])->name('user.create');        
        Route::post('/user', [AdminController::class, 'store'])->name('user.store');

        Route::get('/user/{id}', [AdminController::class, 'edit'])->name('user.edit');
        Route::patch('/user/{id}', [AdminController::class, 'update'])->name('user.update'); 
        
        Route::delete('/user/{id}', [AdminController::class, 'destroy'])->name('user.destroy');
        // Route::get('/user', [AdminController::class, 'create'])->name('user.create');

        // Route::get('register', [RegisteredUserController::class, 'create'])->name('register');        
        // Route::post('register', [RegisteredUserController::class, 'store']);


        Route::get('/profile', [AdminProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [AdminProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [AdminProfileController::class, 'destroy'])->name('profile.destroy');
    });
    require __DIR__.'/admin.php';
});

Route::middleware('auth')->group(function () {

    Route::get('/dashboard', [OwnerContoller::class, 'getFlowList'])->name('dashboard');


    Route::get('/setting', [OwnerContoller::class, 'getApiCredential'])->name('setting');
    Route::get('/totalling', [OwnerContoller::class, 'getTotalling'])->name('totalling');
    Route::get('/totalling/{id}', [OwnerContoller::class, 'getGraphData'])->name('graph');
    // Route::get('/setting', fn() => Inertia::render('Owner/Setting/Edit'))->name('setting');
    
    Route::put('/city-heaven', [CityHeavenController::class, 'update'])->name('cityheaven.update');
    
    Route::get('/flow/{id}', [OwnerContoller::class, 'getFlow'])->name('flow.index');
    Route::post('/flow/{id}', [OwnerContoller::class, 'commit']);

    Route::post('/flow', [OwnerContoller::class, 'addFlow'])->name('flow.create');
    Route::delete('/flow', [OwnerContoller::class, 'deleteFlow']);

    Route::get('/profile', [OwnerProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [OwnerProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [OwnerProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::redirect('/', '/login');


// アンケート回答
Route::get('/{owner}/{flowUrl}', [RespondentController::class, 'getQuestionnair'])->name('questionnair');
Route::post('/{owner}/{flowUrl}', [RespondentController::class, 'addAchievement'])->name('achievement');

Route::get('/{owner}/{flowUrl}/questionnaire', [RespondentController::class,'getQuestionnair']);
Route::get('/{owner}/{flowUrl}/firstQuestionId', [RespondentController::class,'getFirstQuestionId']);

Route::get('/{owner}/{flowUrl}/cityheaven', [ApiController::class, 'getCityHeavenGirls']);




