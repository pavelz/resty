class AddFlickrTagToAlbums < ActiveRecord::Migration
  def self.up
    add_column :albums, :flickr_tag, :string
  end

  def self.down
    remove_column :albums, :flickr_tag
  end
end
