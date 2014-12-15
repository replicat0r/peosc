source 'https://rubygems.org'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.0.0'
gem 'bootstrap-sass', '2.3.2.0'
gem 'sprockets'
gem 'pg', '0.15.1', :group => :production


# Use sqlite3 as the database for Active Record
group :development, :test do
	gem 'sqlite3', '1.3.8'
	
	#gem 'guard-livereload', require: false

end

group :test do
	gem 'selenium-webdriver', '2.35.1'
end
gem 'sass-rails', '4.0.1'
gem 'uglifier', '2.1.1'
gem 'coffee-rails', '4.0.1'
gem 'jquery-rails', '3.0.4'
# gem 'turbolinks', '1.1.1'


group :development do
	gem "figaro"
	#gem 'certified', '~> 1.0.0' #install open on windows to fix OPENSSL error

end

group :production do
  gem 'rails_12factor'
end

group :doc do
  gem 'sdoc', '0.3.20', require: false
end


  