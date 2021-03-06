# This file is auto-generated from the current state of the database. Instead of editing this file, 
# please use the migrations feature of Active Record to incrementally modify your database, and
# then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your database schema. If you need
# to create the application database on another system, you should be using db:schema:load, not running
# all the migrations from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20100526202932) do

  create_table "albums", :force => true do |t|
    t.string   "name"
    t.datetime "taken_when"
    t.integer  "event_id"
    t.string   "flickr_tag"
  end

  create_table "events", :force => true do |t|
    t.string   "title"
    t.text     "description"
    t.datetime "scheduled_for"
    t.integer  "creator_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "games", :force => true do |t|
    t.string   "name"
    t.text     "description"
    t.string   "image_url"
    t.boolean  "featured"
    t.datetime "scheduled_for"
  end

  create_table "reservations", :force => true do |t|
    t.string   "email"
    t.string   "phone"
    t.datetime "when"
    t.integer  "for_seats"
    t.string   "token"
    t.string   "name"
    t.datetime "created_at"
    t.datetime "update_at"
  end

  create_table "users", :force => true do |t|
    t.string   "name"
    t.string   "email"
    t.string   "crypted_password"
    t.string   "password_salt"
    t.string   "persistence_token"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
