CREATE TABLE appraisal_reviews (
  id TEXT PRIMARY KEY,
  municipality TEXT NOT NULL,
  model_id TEXT NOT NULL,
  model_name TEXT NOT NULL,
  service_id TEXT NOT NULL,
  service_name TEXT NOT NULL,
  model_year INTEGER NOT NULL,
  grade_code TEXT NOT NULL,
  mileage_km INTEGER NOT NULL,
  first_offer_man INTEGER NOT NULL,
  final_price_man INTEGER NOT NULL,
  repair_history TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
  rare_tags_json TEXT NOT NULL DEFAULT '[]',
  core_note TEXT NOT NULL,
  verification_status TEXT NOT NULL DEFAULT 'pending',
  client_hash TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX appraisal_reviews_lookup_idx ON appraisal_reviews(municipality, model_id, service_id, verification_status);
CREATE INDEX appraisal_reviews_price_idx ON appraisal_reviews(model_id, final_price_man, created_at);
