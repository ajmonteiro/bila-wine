const mix = require("laravel-mix");



mix.ts("resources/js/app.js", "public/js", [
    require("tailwindcss"),
   ]).react();