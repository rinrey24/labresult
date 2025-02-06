<?php

use App\Http\Controllers\LabResultController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth','verified'])->group(function() {
    Route::get('/',fn() => Inertia::render('Dashboard'))->name('dashboard');
    Route::get('/dashboard',fn() => Inertia::render('Dashboard'))->name('dashboard');

    Route::resource('labresult',LabResultController::class);
    Route::post('/labresult/import', [LabResultController::class, 'import'])->name('labresult.import');
    Route::get('/labresult/print/{labresult}', [LabResultController::class, 'print'])->name('labresult.print');
    
    Route::resource('user',UserController::class);
    Route::get('/user/create', [UserController::class, 'create'])->name('user.create');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
