class AddTimeStampsToReservations < ActiveRecord::Migration
  def self.up
    add_column :reservations, :created_at, :timestamp
    add_column :reservations, :update_at, :timestamp
  end

  def self.down
    remove_column :reservations, :update_at
    remove_column :reservations, :created_at
  end
end
