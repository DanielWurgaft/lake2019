# import libraries
library(tidyverse)
library(here)

# read data
path_to_data = ""
df_raw = read_csv(here(path_to_data))

# create unique IDs
df_ids = df_raw %>% group_by(PROLIFIC_PID) %>% mutate(pid = cur_group_id()) %>% ungroup()

# anonymize
df_anon = df_ids %>% select(-c(PROLIFIC_PID, STUDY_ID, SESSION_ID,
                               run_id, source_code_version, 
                               ip, user_agent, device, 
                               browser, browser_version, platform,
                               platform_version, referer,
                               accept_language, 
                               subject_id, study_id, session_id,
                               recorded_at))

# save data
output_path = ""
write_csv(df_anon, here(output_path))
