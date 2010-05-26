ActionController::Routing::Routes.draw do |map|
  map.resources :games

  map.resources :reservations

  map.resources :user_sessions

  map.resources :users
  map.login 'login', :controller => 'user_sessions', :action => 'new'  
  map.logout 'logout', :controller => 'user_sessions', :action => 'destroy'  
  map.resources :user_sessions  
  map.resources :events
  map.root :controller => "events"
  map.menu '/menu',:controller => 'menu',:action => 'index'
  map.wines '/wines',:controller => 'menu',:action => 'wines'
  map.martinis '/martinis',:controller => 'menu',:action => 'martinis'
  map.contact '/contact',:controller => 'menu',:action => 'contact_us'
  map.about '/about',:controller => 'menu',:action => 'about_us'
  map.today '/today',:controller => 'menu',:action => 'today'
  map.artists '/artists',:controller => 'menu',:action => 'artists'
  map.promotions '/promotions',:controller => 'menu',:action => 'promotions'
  map.photos '/photos',:controller => 'menu',:action => 'photos'

  map.connect ':controller/:action/:id'
  map.connect ':controller/:action/:id.:format'
end
