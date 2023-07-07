(ns neighborhood_food_backend.handler
  (:require [clojure.java.io :as io]
            [neighborhood_food_backend.db :as db]
            [ring.util.response :as response]))

;create a cookie

(defn indexHandler []
 (-> {:status 200
      :body (slurp (io/resource "public/index.html"))}
     (response/content-type "text/html")))

(defn home-handler []
  "Welcome to the Neighborhood Garden Application!")
(defn create-user-handler [request]
  (let [user-data (-> request :params)]
    (try
      (db/create-user user-data)
      (response/response {:status 201 :body "User created."})
      (catch Exception e
        (response/response {:status 500 :body (str "Error creating user: " (.getMessage e))})))))

(defn get-users-handler [request]
  (let [users (db/fetch-users)]
    (response/response {:status 200 :body users})))