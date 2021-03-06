class CreateGames < ActiveRecord::Migration
  def self.up
    create_table :games, :force => true do |t|
      t.column :name, :string
      t.column :description, :text
      t.column :image_url, :string
      t.column :featured, :boolean
    end
  end

  def self.down
    drop_table :games
  end
end
