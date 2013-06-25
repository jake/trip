#!/usr/bin/ruby
require 'rubygems'
require 'json'
require 'exifr'

# files = 'results/test_photos/*'
# files = '/Users/jacob/Dropbox/Spain_Photos/Bravo Bike tours May 20th/*.JPG'
# files = '/Users/jacob/Desktop/Jacob_iphoto/*.JPG'
# files = '/Users/jacob/Dropbox/Spain_Photos/Jason_iphone/*.JPG'
files = '/Users/jacob/Dropbox/Spain_Photos/Tida_iphone/*.JPG'

locations = []

Dir.glob(files) { |file|
    image = EXIFR::JPEG.new(file)

    if image.gps.nil?
        # puts "gps is nil"
        next
    end

    if image.date_time.nil?
        # puts "date_time is nil"
        next
    end

    locations.push({
        :file   => file,
        :date   => image.date_time,
        :t      => image.date_time.to_i,
        :lat    => image.gps.latitude,
        :lon    => image.gps.longitude,
        :alt    => image.gps.altitude
    })
}

puts locations.to_json