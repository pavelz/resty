class ChangeScheduledForToGames < ActiveRecord::Migration
  def self.up
    change_column :games, :scheduled_for, :datetime
  end

  def self.down
    change_column :games, :scheduled_for, :date
  end
end
