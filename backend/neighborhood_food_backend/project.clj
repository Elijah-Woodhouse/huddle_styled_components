(defproject neighborhood_food_backend "0.1.0-SNAPSHOT"

  :description "FIXME: write description"
  :url "http://ourneighborhood.com/FIXME"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [compojure "1.6.1"]
                 [ring/ring-jetty-adapter "1.8.0"]
                 [ring/ring-defaults "0.3.2"]
                 [org.clojure/java.jdbc "0.7.11"]
                 [org.postgresql/postgresql "42.3.1"]]
  :plugins [[lein-ring "0.12.5"]]
  :ring {:handler neighborhood_food_backend.handlers/app}
  :profiles
  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [compojure "1.6.1"]
                        [ring/ring-jetty-adapter "1.8.0"]
                        [ring/ring-mock "0.3.2"]
                        [org.postgresql/postgresql "42.3.1"]
                        [org.clojure/java.jdbc "0.7.11"]]}}

  :main neighborhood_food_backend.core)

