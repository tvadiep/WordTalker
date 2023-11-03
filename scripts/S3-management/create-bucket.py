import boto3, botocore, configparser


def main(s3Client):
    print('\nStart of creating bucket script\n')
    print('Reading configuration file for bucket name...')
    config = readConfig()
    bucket_name = config['bucket_name']

    print('Verifying that the bucket name is valid...')
    verifyBucketName(s3Client, bucket_name)

    ##### Create the notes-bucket
    createBucket(s3Client, bucket_name)

    print('\nConfirm that the bucket exists...')

    verifyBucket(s3Client, bucket_name)

    print('\nEnd of create bucket script\n')

def readConfig():
    config = configparser.ConfigParser()
    config.read('./config.ini')
    return config['S3']

def createBucket(s3Client, name):
    session = boto3.session.Session()
    current_region = session.region_name
    print('\nCreating ' + name + ' in ' + current_region)

    if current_region == 'ap-northeast-1':
        response = s3Client.create_bucket(
            Bucket=name,
            CreateBucketConfiguration={
                'LocationConstraint': 'ap-northeast-1'
            }
        )
    else:
        response = s3Client.create_bucket(Bucket=name)

    print('Success!')


def verifyBucketName(s3Client, bucket):
    try:
        s3Client.head_bucket(Bucket=bucket)
        raise SystemExit('This bucket has already been created in your account, exiting because there is nothing further to do!')
    except botocore.exceptions.ClientError as e:
        error_code = int(e.response['Error']['Code'])
        if error_code == 404:
            print('Existing Bucket Not Found, please proceed')
        if error_code == 403:
            raise SystemExit('This bucket is owned by another aws account')

def verifyBucket(s3Client, bucketName):
    waiter = s3Client.get_waiter('bucket_exists')
    waiter.wait(Bucket=bucketName)
    print('The bucket: ' + bucketName + ' is now available')

client = boto3.client('s3')

try:
    main(client)
except botocore.exceptions.ClientError as err:
    print(err.response['Error']['Message'])
except botocore.exceptions.ParamValidationError as error:
    print(error)