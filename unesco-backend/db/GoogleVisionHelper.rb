require "google/cloud/vision"

module GoogleVisionHelper

  def get_tags(img_url, site_reference)
    image_annotator = Google::Cloud::Vision::ImageAnnotator.new

    response = image_annotator.label_detection(
      image: img_url,
      max_results: 5
    )
  
    response.responses.each do |res|
      res.label_annotations.each do |label|
        tag = Tag.find_or_create_by(name: label.description)
        site_reference_tag = SiteReferenceTag.find_or_create_by(
          site_reference_id: site_reference.id, 
          tag_id: tag.id)
        puts "Tag of #{tag.name} created for site #{site_reference.id}"
      end
    end
  
  end

end

#SAMPLE RESPONSE
# get_tags(site_a["image_url"])
# Building
# Town
# Architecture
# Landmark
# City
# [<Google::Cloud::Vision::V1::AnnotateImageResponse: face_annotations: [], landmark_annotations: [], logo_annotations: [], label_annotations: [<Google::Cloud::Vision::V1::EntityAnnotation: mid: "/m/0cgh4", locale: "", description: "Building", score: 0.937140166759491, confidence: 0.0, topicality: 0.937140166759491, bounding_poly: nil, locations: [], properties: []>, <Google::Cloud::Vision::V1::EntityAnnotation: mid: "/m/0dx1j", locale: "", description: "Town", score: 0.9123395681381226, confidence: 0.0, topicality: 0.9123395681381226, bounding_poly: nil, locations: [], properties: []>, <Google::Cloud::Vision::V1::EntityAnnotation: mid: "/m/03nfmq", locale: "", description: "Architecture", score: 0.9071162939071655, confidence: 0.0, topicality: 0.9071162939071655, bounding_poly: nil, locations: [], properties: []>, <Google::Cloud::Vision::V1::EntityAnnotation: mid: "/m/05_5t0l", locale: "", description: "Landmark", score: 0.8777039647102356, confidence: 0.0, topicality: 0.8777039647102356, bounding_poly: nil, locations: [], properties: []>, <Google::Cloud::Vision::V1::EntityAnnotation: mid: "/m/01n32", locale: "", description: "City", score: 0.7850251793861389, confidence: 0.0, topicality: 0.7850251793861389, bounding_poly: nil, locations: [], properties: []>], text_annotations: [], safe_search_annotation: nil, image_properties_annotation: nil, error: nil, crop_hints_annotation: nil, full_text_annotation: nil, web_detection: nil, product_search_results: nil, context: nil, localized_object_annotations: []>]