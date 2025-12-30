// import {createClient }  from 'redis';
// const client = createClient()
// client.on("error",err=>{
//     console.log("redis error",err);
// })
// await client.connect()
// await client.set('key', '123');
// const value = await client.get('key');
// console.log('value: ', value);
// // await client.hSet('user-session:123', {
// //     name: 'John',
// //     surname: 'Smith',
// //     company: 'Redis',
// //     age: 29

// // })
// let userSession = await client.hGetAll('user-session:123');
// console.log(JSON.stringify(userSession, null, 2));
// *****
// import * as Minio from 'minio';

// const minioClient = new Minio.Client({
//     endPoint: '185.100.212.76',  
//     port: 9999,
//     useSSL: false,
//     accessKey: 'nivetha',
//     secretKey: 'nivetha1',
// });
// *****


//==================================new bucket creation===================================
// Source file to upload
// const sourceFile = './img/images (1).jpg';

// // Destination bucket
// const bucket = 'nivetha-testing-bucket';

// // Destination object name
// const destinationObject = 'image.jpg';
// (async () => {
//     try {

//         const exists = await minioClient.bucketExists(bucket);
//         if (!exists) {
//             await minioClient.makeBucket(bucket, '');
//             console.log(`Bucket "${bucket}" created.`);
//         } else {
//             console.log(`Bucket "${bucket}" already exists.`);
//         }

//         // Upload the file to the bucket
//         await minioClient.fPutObject(bucket, destinationObject, sourceFile);
//         console.log(`File "${destinationObject}" uploaded successfully to bucket "${bucket}".`);
//     } catch (err) {
//         console.error('Error:', err.message || err);
//     }
// })()


// ==================================List of all bucket datas===================================
// *****
// try {
//     const buckets = await minioClient.listBuckets()
//     console.log('Success', buckets)
//   } catch (err) {
//     console.log(err.message)
//   }
// *****


//============================ ==================================


function PointsFunction(points) {
  console.log("data counting");
  const total_points = points
  const addPoints = (add) => {
    return total_points + add
  }
  const removePoints = (remove) => {
    return total_points + remove
  }
  const getPoints = () => {
    return total_points
  }
  return {
    addPoints,
    removePoints,
    getPoints
  }
}
const newpoints = PointsFunction(54)
console.log(newpoints.addPoints(5));