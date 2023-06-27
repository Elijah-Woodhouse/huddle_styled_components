(ns your-project.routes
    (:require [compojure.core :refer [defroutes GET POST]]
        [your-project.handlers :refer [handle-get handle-post]]))

(defroutes app-routes
           (GET "/users" [] (handle-get))
           (POST "/users" [] (handle-post)))
           ;; Add more routes as needed

