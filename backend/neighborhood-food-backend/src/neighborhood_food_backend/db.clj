(ns your-project.db
    (:require [clojure.java.jdbc :as jdbc]))


(def db-spec
  {:classname "org.postgresql.Driver"
   :subprotocol "postgresql"
   :subname "//localhost:5432/your-database-name"
   :user "your-username"
   :password "your-password"})

;; Test the connection
(defn test-connection []
      (jdbc/with-db-connection [conn db-spec]
                               (jdbc/with-query-results rs ["SELECT 1"] (println (first rs)))))


(defn get-users []
      (jdbc/query db-spec ["SELECT * FROM users"]))

(defn save-user [user]
      (jdbc/insert! db-spec :users user))

