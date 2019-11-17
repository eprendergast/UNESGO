require "google/cloud/vision"

image_path = 'https://www.adventures-abroad.com/blog/wp-content/uploads/2019/06/helicopter-tour-victoria-falls-zimbabwe-africa.jpeg'

image_annotator = Google::Cloud::Vision::ImageAnnotator.new

response = image_annotator.label_detection(
  image:       image_path,
  max_results: 10 # optional, defaults to 10
)

response.responses.each do |res|
  res.label_annotations.each do |label|
    puts label.description
  end
end
