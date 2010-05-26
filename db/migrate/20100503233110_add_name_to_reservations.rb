class AddNameToReservations < ActiveRecord::Migration
  def self.up
    add_column :reservations, :name, :string
  end

  def self.down
    remove_column :reservations, :name
  end
end
