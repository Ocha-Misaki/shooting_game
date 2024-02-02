source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.2.2'

gem 'rails', '~> 7.1.2'

gem 'bootsnap', require: false
gem 'devise'
gem 'haml-rails'
gem 'importmap-rails'
gem 'jbuilder'
gem 'pg'
gem 'puma', '>= 5.0'
gem 'redis'
gem 'sassc-rails'
gem 'sprockets-rails'
gem 'stimulus-rails'
gem 'turbo-rails'

group :development, :test do
  gem 'debug', platforms: %i[mri windows]
  gem 'sgcop', github: 'SonicGarden/sgcop'
end

group :development do
  gem 'dockerfile-rails'
  gem 'web-console'
end

group :test do
  gem 'capybara'
  gem 'selenium-webdriver'
end
