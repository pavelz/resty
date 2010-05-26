class CreateEvents < ActiveRecord::Migration
  def self.up
    create_table :events, :force => true do |t|
      t.column :title, :string
      t.column :description, :text
      t.column :scheduled_for, :datetime
      t.column :creator_id, :integer
      
      t.timestamps
    end
  end

  def self.down
    drop_table :events
  end
end
