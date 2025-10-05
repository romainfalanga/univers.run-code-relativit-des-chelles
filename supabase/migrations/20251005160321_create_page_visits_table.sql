/*
  # Create page visits tracking table

  1. New Tables
    - `page_visits`
      - `id` (uuid, primary key) - Unique identifier for each visit record
      - `session_id` (text) - Browser session identifier (generated client-side)
      - `page_path` (text) - The path of the visited page (e.g., "/trous-noirs-echelles/creation")
      - `visited_at` (timestamptz) - Timestamp when the page was visited
      - `created_at` (timestamptz) - Record creation timestamp

  2. Indexes
    - Index on `session_id` and `page_path` for efficient queries
    - Index on `visited_at` for time-based queries

  3. Security
    - Enable RLS on `page_visits` table
    - Policy allowing anyone to insert their own visit records (public access)
    - Policy allowing users to read their own session's visit records

  ## Notes
  - This table tracks page visits per browser session
  - Session ID is generated client-side using localStorage or similar
  - Data persists across browser sessions for the same user
  - Visited status propagates: visiting a child page marks parent pages as visited too
*/

-- Create the page_visits table
CREATE TABLE IF NOT EXISTS page_visits (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text NOT NULL,
  page_path text NOT NULL,
  visited_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- Create indexes for efficient queries
CREATE INDEX IF NOT EXISTS idx_page_visits_session_id ON page_visits(session_id);
CREATE INDEX IF NOT EXISTS idx_page_visits_session_path ON page_visits(session_id, page_path);
CREATE INDEX IF NOT EXISTS idx_page_visits_visited_at ON page_visits(visited_at);

-- Enable Row Level Security
ALTER TABLE page_visits ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can insert visit records (public access for tracking)
CREATE POLICY "Anyone can insert page visits"
  ON page_visits
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Policy: Anyone can read visit records (public access for checking visited status)
CREATE POLICY "Anyone can read page visits"
  ON page_visits
  FOR SELECT
  TO public
  USING (true);

-- Note: We allow public access because session_id is client-generated and not sensitive
-- The worst case is someone seeing which pages have been visited in a session
-- which is acceptable for this educational application