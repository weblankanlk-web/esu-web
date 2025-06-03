import http from "k6/http";
import { check, group, sleep } from "k6";

export const options = {
  vus: 50,
  duration: "30s",
};

const token = "1100626|VPJcv2Y6wFiHPw4i60xdc1WQ2NMPUQgerXlYhOyI3a07cd1c";
const baseURL = "https://publicapi.esoft.lk/api/v1/courses";

const headers = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export default function () {
  // Step 1: Get course list
  const courseRes = http.get(baseURL, headers);

  check(courseRes, {
    "courses status is 200": (r) => r.status === 200,
  });

  const courses = courseRes.json();
  if (!Array.isArray(courses)) return;

  // Step 2: Loop through the first few courses
  for (let i = 0; i < Math.min(3, courses.length); i++) {
    const courseId = courses[i].id;

    // Get fees
    const feeRes = http.get(`${baseURL}/${courseId}/fees`, headers);
    check(feeRes, {
      "fees status is 200": (r) => r.status === 200,
    });

    // Get batches (with dummy branch_id=1)
    const batchRes = http.get(
      `${baseURL}/${courseId}/batches?branch_id=1`,
      headers
    );
    check(batchRes, {
      "batches status is 200": (r) => r.status === 200,
    });
  }

  sleep(1);
}
