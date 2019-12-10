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
        puts "Tag of #{tag.name} created for site reference #{site_reference.id}"
      end
    end
  
  end

end
