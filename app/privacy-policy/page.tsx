"use client";

import React from "react";
import Breadrumb from "@/components/common/Breadcrumb/Breadcrumb";
import BannerTitleWithOutImage from "@/components/common/BannerTitleWithOutImage/BannerTitleWithOutImage";
import "./style.scss";
import { useTheme } from "@/lib/ThemeContext";

export default function PrivacyPolicyPage() {
  const { setColor } = useTheme();

  // useEffect(() => {
  //   setColor("rgb(0, 174, 205)");
  // }, [setColor]);

  return (
    <>
      <Breadrumb />
      <BannerTitleWithOutImage
        title="Privacy Policy"
        subtitle=""
      />

      <section className="simple-padding-bottom impornent-pages">
        <div className="small-middle-wrap">
          <div className="content  simple-padding-top">
            <p>
              We respect and are committed to protecting your privacy. That is why we have adopted this Privacy Policy.
              This Privacy Policy lets you know how your personal information is processed and explains data collection and use practices for the ESOFT Uni Network.
              The “ESOFT Uni Network” includes all web pages, apps, newsletters, forums, and lists operated by ESOFT Uni Computer Studies (Pvt) Ltd and its subsidiaries.
              By accessing the ESOFT Uni Network, you consent to the practices described in this Privacy Policy.
            </p>

            <p>We promise to use your personal information only in ways that are compatible with this policy.</p>

            <h3><strong>What information are you collecting and how are you collecting it?</strong></h3>

            <p><strong>IP Addresses:</strong> We log your domain name and IP address when visiting our websites, but this does not personally identify you. It is used for traffic analysis and security investigations. We do not collect email addresses automatically.</p>

            <p><strong>Cookies:</strong> We and our advertisers may send cookies to your browser. Cookies help personalize content and track which areas you visit. You can configure your browser to block cookies, though some site features may not work properly if disabled.</p>

            <h3><strong>What personal information do you collect?</strong></h3>

            <p>We collect personal information when required — including name, title, organization, email, phone number, address, job-related data, and credit card info — typically when making purchases or signing up for services.</p>

            <p>We may collect this information when you:</p>
            <ul>
              <li>Register for newsletters, events, or promotions</li>
              <li>Enter contests (we may collect contact and demographic info)</li>
              <li>Make purchases (credit card info is only used for transactions and not shared without consent)</li>
              <li>Register for access to certain features or services</li>
            </ul>

            <p>We may share your info with clients or third parties who may send you promotional materials if you consent. You can unsubscribe from such lists anytime.</p>

            <p>When using ESOFT Uni forums, your name or alias is only used for managing your forum account. We do not track or use this data outside the platform.</p>

            <p>For co-branded or third-party services within our network, your data may be passed to those providers, subject to their own privacy policies.</p>

            <p>We may send you email or postal updates about products or services. You can opt out at any time using the unsubscribe link or by emailing stop@ESOFT Uni.lk.</p>

            <h3><strong>Your Consent To This Agreement</strong></h3>
            <p>By using the ESOFT Uni Network, you consent to the collection and use of information as described above. We may update this policy and post any changes here so you're aware of how your data is managed.</p>
          </div>
        </div>
      </section>
    </>
  );
}
