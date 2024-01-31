"use client";

import DashboardEarnings from "@/components/dashboard/earnings";
import DashboardEarningsResume from "@/components/dashboard/earningsResume";
import DashboardPopularPosts from "@/components/dashboard/popularPosts";
import DashboardRecentPurchases from "@/components/dashboard/recentPurchases";
import DashboardSalesLocations from "@/components/dashboard/salesLocation";
import DashboardStats from "@/components/dashboard/stats";
import Subscriptions from "@/components/dashboard/subscription";
import DashboardTopProducts from "@/components/dashboard/topProducts";
import DashboardTopSubs from "@/components/dashboard/topSubscribers";
import axios from "axios";
import Image from "next/image";
import { use, useEffect, useState } from "react";

export default function Home() {
  const [topSubscribers, setTopSubscribers] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [recentPurchases, setRecentPurchases] = useState([]);
  const [products, setProducts] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchSubscribers();
    fetchPurchases();
    fetchProducts();
    fetchPosts();
  }, []);

  const fetchSubscribers = async () => {
    try {
      const response = await axios.get("/json/subscribers.json");
      const data = response.data;

      setTopSubscribers(data.slice(0, 4));
      setSubscribers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPurchases = async () => {
    try {
      const response = await axios.get("/json/recentPurchases.json");
      const data = response.data;

      setRecentPurchases(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/json/products.json");
      const data = response.data;

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPosts = async () => {
    try {
      const response = await axios.get("/json/posts.json");
      const data = response.data;

      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="mx-auto w-[90%] lg:w-[1120px]">
        <div className="pb-7 pt-9">
          <div className="font-josefin text-2xl text-white">
            Good Afternoon Sofia 👋
          </div>
          <div className="font-josefin text-base text-priv-gray">
            Welcome to your new creator studio.
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4">
          <DashboardStats
            color="#2A3057"
            icon="/icons/eye_blue.svg"
            title="Visitors"
            value="152"
            active={true}
            k={true}
          />

          <DashboardStats
            color="#4B3F3A"
            icon="/icons/user_yellow.svg"
            title="Subscribers"
            value="1.5"
            active={true}
            k={true}
          />

          <DashboardStats
            color="#213F4A"
            icon="/icons/post_green.svg"
            title="Posts"
            value="168"
          />

          <DashboardStats
            color="#36375B"
            icon="/icons/heart_purple.svg"
            title="Tips"
            value="52"
          />

          <DashboardEarnings />
          <DashboardEarningsResume />
          <DashboardSalesLocations />
          <DashboardTopSubs data={topSubscribers} />
          <DashboardRecentPurchases data={recentPurchases} />
          <DashboardTopProducts data={products} />
          <DashboardPopularPosts data={posts} />
          <Subscriptions />
        </div>

        <div className="p-96"></div>
      </div>
    </>
  );
}

// 60
