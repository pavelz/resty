class CreateReservations < ActiveRecord::Migration
  def self.up
    create_table :reservations, :force => true do |t|
      t.column :email, :string
      t.column :phone, :string
      t.column :when, :datetime
      t.column :for_seats, :integer
      t.column :token, :string
    end
  end

  def self.down
    drop_table :reservations
  end
end
