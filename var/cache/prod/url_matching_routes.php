<?php

/**
 * This file has been auto-generated
 * by the Symfony Routing Component.
 */

return [
    false, // $matchHost
    [ // $staticRoutes
        '/contact' => [[['_route' => 'contact', '_controller' => 'App\\Controller\\ContactController::index'], null, null, null, false, false, null]],
        '/' => [[['_route' => 'home', '_controller' => 'App\\Controller\\HomeController::index'], null, null, null, false, false, null]],
        '/login' => [[['_route' => 'login', '_controller' => 'App\\Controller\\LoginController::login'], null, null, null, false, false, null]],
        '/logout' => [[['_route' => 'logout', '_controller' => 'App\\Controller\\LoginController::logout'], null, null, null, false, false, null]],
        '/Espace' => [[['_route' => 'mon_espace', '_controller' => 'App\\Controller\\MonEspaceController::index'], null, null, null, false, false, null]],
        '/register' => [[['_route' => 'register', '_controller' => 'App\\Controller\\RegisterController::register'], null, null, null, false, false, null]],
        '/resultat' => [[['_route' => 'resultat', '_controller' => 'App\\Controller\\SearchController::search'], null, null, null, false, false, null]],
        '/trip/autocomplete' => [[['_route' => 'trip_autocomplete', '_controller' => 'App\\Controller\\TripController::autocomplete'], null, null, null, false, false, null]],
        '/trip/resultat' => [[['_route' => 'trip_resultat', '_controller' => 'App\\Controller\\TripController::resultat'], null, null, null, false, false, null]],
    ],
    [ // $regexpList
    ],
    [ // $dynamicRoutes
    ],
    null, // $checkCondition
];
