<?php
/**
 * Created by PhpStorm.
 * User: sergiovilar
 * Date: 11/1/15
 * Time: 12:02 PM
 */

Admin::model('Day')
//    ->middleware('admin') // Specify an HTTP Middleware to check if the user is logged
    ->title('Dias da semana')
    ->columns(function(){
        Column::string('name', 'Dia da semana');
    })->form(function(){
        FormItem::text('name', 'Dia da semana');
    });
