import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir:'./tests',
  use:{
  baseURL:process.env.BASE_URL,
  headless:true,
  screenshot:'only-on-failure',
  trace:'retain-on-failure'
  }
});