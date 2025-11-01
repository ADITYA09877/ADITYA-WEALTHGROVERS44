/*
  # Create Contact Form Submissions Table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `message` (text)
      - `created_at` (timestamp)
      - `status` (text - 'pending', 'sent', 'failed')

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for anonymous users to insert submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Only service role can view submissions"
  ON contact_submissions
  FOR SELECT
  TO service_role
  USING (true);

CREATE POLICY "Only service role can update submissions"
  ON contact_submissions
  FOR UPDATE
  TO service_role
  USING (true);
