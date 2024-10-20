<?php

// use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProfileController as OwnerProfileController;
use App\Http\Controllers\Admin\ProfileController as AdminProfileController;
use App\Http\Controllers\ApiController;
use App\Http\Controllers\RespondentController;
use App\Http\Controllers\OwnerContoller;
use App\Http\Controllers\CityHeavenController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

require __DIR__.'/auth.php';

// admin
Route::prefix('admin')->name('admin.')->group(function(){
    Route::middleware(['auth:admin', 'verified'])->group(function () {
        Route::get('/dashboard', fn() => Inertia::render('Admin/Dashboard'))->name('dashboard');

        Route::get('/profile', [AdminProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [AdminProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [AdminProfileController::class, 'destroy'])->name('profile.destroy');
    
    });

    require __DIR__.'/admin.php';
});






// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('/dashboard', fn() => Inertia::render('Owner/board/MainBoard'))->name('dashboard');

//     Route::get('/setting', fn() => Inertia::render('Owner/Setting/Edit'))->name('setting');

//     // Route::get('/flows', [OwnerContoller::class, 'getFlows']);
// });

Route::middleware('auth')->group(function () {


    Route::get('/dashboard', [OwnerContoller::class, 'getFlowList'])->name('dashboard');

    Route::get('/setting', fn() => Inertia::render('Owner/Setting/Edit'))->name('setting');
    
    Route::put('city-heaven', [CityHeavenController::class, 'update'])->name('cityheaven.update');

    // Route::get('/question-nodes', [OwnerContoller::class, 'getQuestionNodes']);
    // Route::get('/result-nodes', [OwnerContoller::class, 'getResultNodes']);
    // Route::get('/edges', [OwnerContoller::class, 'getEdges']);
    
    
    Route::post('/flows', [OwnerContoller::class, 'commit']);
    
    // Route::get('/flow-info', [OwnerContoller::class, 'getFlowTitleAndUrl']);
    Route::get('/flow/{id}', [OwnerContoller::class, 'getFlow'])->name('flow.index');
    Route::post('/flow', [OwnerContoller::class, 'addFlow']);
    Route::delete('/flow', [OwnerContoller::class, 'deleteFlow']);

    // Route::get('/firstQuestionId', [OwnerContoller::class, 'getFirstQuestionId']);

    Route::get('/profile', [OwnerProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [OwnerProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [OwnerProfileController::class, 'destroy'])->name('profile.destroy');

});


Route::redirect('/', '/login');

// アンケート回答
Route::get('/{owner}/{flowUrl}', [RespondentController::class, 'getQuestionnair'])->name('questionnair');

// Route::get('/{owner}/{flowUrl}', function ($owner, $flowUrl) {
//     return Inertia::render('Respondent/questionnarie/cityHeaven/Index', [ 'flowUrl' => $flowUrl]);
// });

Route::get('/{owner}/{flowUrl}/questionnaire', [RespondentController::class,'getQuestionnair']);
Route::get('/{owner}/{flowUrl}/firstQuestionId', [RespondentController::class,'getFirstQuestionId']);

// シティヘブンAPI
Route::get('/{owner}/{flowUrl}/cityheaven', [ApiController::class, 'getCityHeavenGirls']);


