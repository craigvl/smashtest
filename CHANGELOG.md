# 1.5.13

- Removed crossorigin attribute from report due to problems with chrome

# 1.5.12

- Simplified function call and function declaration filenames/linenumbers in report, removed excess logging

# 1.5.11

- Fixed lack of filenames/line numbers in stack trace for function not found error

# 1.5.10

- Removed unnecessary code to mitigate ECONNREFUSED errors, which were fixed by correcting an environment variable [(issue)](https://github.com/smashtestio/smashtest/issues/30)

# 1.5.9

- Added new 60s default timeout for all steps [(issue)](https://github.com/smashtestio/smashtest/issues/53)
- Added function to adjust default timeout for the current branch
