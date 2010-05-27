class CreateAlbums < ActiveRecord::Migration
  def self.up
    create_table :albums, :force => true do |t|
      t.column :name, :string
      t.column :taken_when, :datetime
      t.column :event_id, :integer
    end
  end

  def self.down
    drop_table :albums
  end
end
