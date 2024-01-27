source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.2.2"

gem "rails", "~> 7.1.2"

gem "sprockets-rails"
gem "puma", ">= 5.0"
gem "importmap-rails"
gem "turbo-rails"
gem "stimulus-rails"
gem "jbuilder"
gem "redis"
gem "bootsnap", require: false
gem 'devise'
gem 'haml-rails'
gem 'pg'

group :development, :test do
  gem "debug", platforms: %i[ mri windows ]
  gem 'sgcop', github: 'SonicGarden/sgcop'
end

group :development do
  gem "web-console"
  gem 'dockerfile-rails'
end

group :test do
  gem "capybara"
  gem "selenium-webdriver"
end
