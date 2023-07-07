(ns neighborhood_food_backend.db
    (:require [clojure.java.jdbc :as jdbc]))

(def db-spec
  {:dbtype "postgresql"
   :dbname "our-neighborhood-garden-database"
   :user "elijahwoodhouse95"
   :password "9450204Ew!"
   :host "localhost"
   :port 5432})

(defn create-produce-table []
      (jdbc/with-db-connection [conn db-spec]
                               (jdbc/execute! conn "CREATE TABLE IF NOT EXISTS produce (
                                               id SERIAL PRIMARY KEY,
                                               name VARCHAR(255),
                                               amount INTEGER,
                                               species VARCHAR(255),
                                               desired_produce_id INTEGER,
                                               FOREIGN KEY (desired_produce_id) REFERENCES produce(id)
                                             )")))

;(defn create-cards-table []
 ;     (jdbc/with-db-connection [conn db-spec]
  ;                             (jdbc/execute! conn
   ;                                           "CREATE TABLE IF NOT EXISTS cards (
    ;                                           id SERIAL PRIMARY KEY,
     ;                                          name VARCHAR(255),
      ;                                         user_id INTEGER,
       ;                                        credit_card_id INTEGER,
        ;                                       FOREIGN KEY (credit_card_id) REFERENCES credit_cards(id)
         ;                                    )")))

(defn create-users-table []
      (jdbc/with-db-connection [conn db-spec]
                               (jdbc/execute! conn
                                              "CREATE TABLE IF NOT EXISTS users (
                                               id SERIAL PRIMARY KEY,
                                               name VARCHAR(255),
                                               address_city VARCHAR(255),
                                               address_state VARCHAR(255),
                                               address_zipcode VARCHAR(255),
                                               address_country VARCHAR(255),
                                               phone_number VARCHAR(255),
                                               email VARCHAR(255),
                                               credit_card_id INTEGER
                                             )")))

(defn create-user [name address]
      (jdbc/with-db-connection [conn db-spec]
                               (jdbc/insert! conn :users
                                             {:name name}
                                             :address address)))

(defn insert-produce [name amount species desired-produce-id]
      (jdbc/with-db-connection [conn db-spec]
                               (jdbc/insert! conn :produce
                                             {:name name}
                                             :amount amount
                                             :species species
                                             :desired_produce_id desired-produce-id)))

(defn fetch-user [name user-id password]
      (jdbc/with-db-connection [conn db-spec]
                               (jdbc/query conn ["SELECT user-id FROM users"])))

(defn fetch-users []
      (jdbc/with-db-connection [conn db-spec]
                               (jdbc/query conn ["SELECT * FROM users"])))

(defn fetch-produce [name user-id password]
      (jdbc/with-db-connection [conn db-spec]
                               (jdbc/query conn ["SELECT * FROM produce"])))

(defn initialize-db []
      (jdbc/with-db-connection [conn db-spec]
                               ;(create-cards-table)
                               (create-produce-table)
                               (create-users-table)))


(defn -main []
      (initialize-db))
