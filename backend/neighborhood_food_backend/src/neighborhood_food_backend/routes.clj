(ns neighborhood_food_backend.routes
  (:require [compojure.core :refer [defroutes GET POST context]]
            [neighborhood_food_backend.handler :as handler]))

(defroutes app-routes
           (GET "/" [] (handler/indexHandler))
           (GET "/signup" [] (handler/indexHandler))
           (context "/admin" []
             (GET "/" [] (handler/home-handler))
             (GET "/users" [] (handler/get-users-handler))
             (POST "/users" [] (handler/create-user-handler))))


