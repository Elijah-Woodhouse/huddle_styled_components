(ns neighborhood_food_backend.core
  (:require [compojure.core :refer [defroutes GET POST]]
            [ring.middleware.params :as params]
            [ring.middleware.keyword-params :as keyword-params]
            [ring.middleware.multipart-params :as multipart-params]
            [ring.middleware.resource :as resource]
            [ring.middleware.defaults :refer [wrap-defaults api-defaults]]
            [neighborhood_food_backend.routes :as routes]
            [neighborhood_food_backend.db :as db]
            [ring.adapter.jetty :as jetty]))



(def app
  (-> routes/app-routes
      (params/wrap-params)
      (keyword-params/wrap-keyword-params)
      (multipart-params/wrap-multipart-params)
      (wrap-defaults api-defaults)
      (resource/wrap-resource "public")))

(defn -main []
  (db/initialize-db)                                        ; Initialize the database
  (println "Starting server on port 3000...")
  (jetty/run-jetty app {:port 3000}))

