'use strict'

/** Base Modules **/
import { serve } from 'https://deno.land/std/http/server.ts';

/** 3rd Party Modules **/
import Datastore from 'https://deno.land/x/dndb@0.3.3/mod.ts';

/** Custom Modules **/
import { HomeShow } from './controllers/Home.js';

serve(HomeShow);
