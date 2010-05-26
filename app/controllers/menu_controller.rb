class MenuController < ApplicationController
  def index
    render 'menu'
  end
  
  def contact_us
    render 'contact'
  end
  
  def today
    @games = Game.find(:all, :conditions => ["scheduled_for > ? and scheduled_for < ? ", Date.today, Date.today + 1.day ]  )
    @events = Event.find(:all, :conditions => ["scheduled_for > ? and scheduled_for < ? ", Date.today, Date.today + 1.day ]  )
    render 'today'
  end

  def about_us
    render 'about'
  end

  def photos
    render 'photos'
  end

  def martinis
    render 'martinis'
  end
  
  def wines
    render 'wines'
  end
  
  def artists
    render 'coming_soon'
  end

  def promotions
    render 'coming_soon'
  end

end
