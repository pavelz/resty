class AlbumsController < ApplicationController
  before_filter :authenticate, :except => [:index, :show]
  def index
    @albums = Album.find ( :all , :order => "taken_when ASC", :include => :event)
    
    respond_to do |wants|
      wants.json do
        render :json => @albums.to_json(:include=>:event)
      end
      wants.html do
        render 'index.html.haml'
      end
    end

  end
  make_resourceful do
    actions :all
  end
end
