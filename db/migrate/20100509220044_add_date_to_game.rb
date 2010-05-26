class AddDateToGame < ActiveRecord::Migration
  def self.up
    add_column :games, :scheduled_for, :date
  end

  def self.down
    remove_column :games, :scheduled_for
  end
end
