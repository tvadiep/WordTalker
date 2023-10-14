# Commands for stuffs



## S3
After run `create-bucket.py`, `create-object.py` and `convert-csv-to-json.py`, we have to run some commands to make the work done.

### Make alias for bucket name:

`mybucket=NOTES_BUCKET_NAME`

### Change public block of the bucket

`aws s3api put-public-access-block --bucket $mybucket --public-access-block-configuration "BlockPublicPolicy=false,RestrictPublicBuckets=false"`

### Sync the data

`aws s3 sync ~/environment/labRepo/html/. s3://$mybucket/`


### Enable web hosting: 

`aws s3api put-bucket-website --bucket $mybucket --website-configuration file://~/environment/labRepo/website.json`


### Change the bucket name in the policy file:

`sed -i "s/\[BUCKET\]/$mybucket/g" ~/environment/labRepo/policy.json`


### Change policy for the bucket: 

`aws s3api put-bucket-policy --bucket $mybucket --policy file://~/environment/labRepo/policy.json`

### Set region (alias)

`region=ap-northeast-1`


### See the result: 
`printf "\nYou can now access the website at:\nhttp://$mybucket.s3-website.$region.amazonaws.com\n\n"`


## DynamoDB
