"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./pickView.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { IDataHistory } from "@/app/action";

function PickView({ data }: { data: IDataHistory[] }) {
  const dataPantipPick = [
    {
      topic_id: 42835137,
      title: "Degradi บาดเจ็บ l Nervini และ Omoruyi ถูกเรียกเข้าแคมป์",
      topic_type: 1,
      created_time: "2024-07-10T20:51:57Z",
      thumbnail_url:
        "https://ptcdn.info/pick/588/000/000/lygbcc2ri98DcLvyjGC-s.png",
      views_count: 0,
      comments_count: 24,
      votes_count: 0,
      author: {
        id: 3072997,
        name: "Buckley",
        avatar: {
          original:
            "https://p.ptcdn.info/772/015/000/3072997_62837109011720285110_IMG-0350-JPG_o.jpg",
          large:
            "https://p.ptcdn.info/772/015/000/3072997_62837109011720285110_IMG-0350-JPG_l.jpg",
          medium:
            "https://p.ptcdn.info/772/015/000/3072997_62837109011720285110_IMG-0350-JPG_m.jpg",
          small:
            "https://p.ptcdn.info/772/015/000/3072997_62837109011720285110_IMG-0350-JPG_s.jpg",
        },
        slug: "/profile/3072997",
      },
      tags: [
        {
          name: "วอลเลย์บอล",
          slug: "วอลเลย์บอล",
        },
      ],
      timestamp: "1720665060000",
    },
    {
      topic_id: 42834443,
      title: "🎤 เช็คลิสต์ศิลปิน ‘เดบิวต์ | คัมแบค’ เดือน ‘กรกฎาคม’ 2024 ♫ ♬",
      topic_type: 1,
      created_time: "2024-07-10T11:50:00Z",
      thumbnail_url:
        "https://ptcdn.info/pick/588/000/000/1953846545668e7829e8071-1720612905-s.jpg",
      views_count: 559,
      comments_count: 23,
      votes_count: 0,
      author: {
        id: 789,
        name: "เพี้ยน จัง แก",
        avatar: {
          original: "https://p.ptcdn.info/426/015/000/789_17036557144800_o.jpg",
          large: "https://p.ptcdn.info/426/015/000/789_17036557144800_l.jpg",
          medium: "https://p.ptcdn.info/426/015/000/789_17036557144800_m.jpg",
          small: "https://p.ptcdn.info/426/015/000/789_17036557144800_s.jpg",
        },
        slug: "/profile/789",
      },
      tags: [
        {
          name: "K-POP",
          slug: "K-POP",
        },
        {
          name: "NCT (นักร้องนักดนตรี)",
          slug: "NCT_(นักร้องนักดนตรี)",
        },
        {
          name: "TWICE (นักร้องนักดนตรี)",
          slug: "TWICE_(นักร้องนักดนตรี)",
        },
        {
          name: "Stray Kids (นักร้องนักดนตรี)",
          slug: "Stray_Kids_(นักร้องนักดนตรี)",
        },
        {
          name: "ENHYPEN (นักร้องนักดนตรี)",
          slug: "ENHYPEN_(นักร้องนักดนตรี)",
        },
      ],
      timestamp: "1720618200000",
    },
    {
      topic_id: 42833642,
      title: "เที่ยว Lubeck เมืองน่ารักทางเหนือของเยอรมัน :Trip 2024 ep.3",
      topic_type: 4,
      created_time: "2024-07-10T05:02:10Z",
      thumbnail_url:
        "https://ptcdn.info/pick/588/000/000/lyfd4of9iBUqLy2avir-s.jpg",
      views_count: 485,
      comments_count: 31,
      votes_count: 10,
      author: {
        id: 105323,
        name: "thai orchid",
        avatar: {
          original:
            "http://p.ptcdn.info/362/001/000/105323_4752627382_---------------JPG_o.jpg",
          large:
            "https://p.ptcdn.info/362/001/000/105323_4752627382_---------------JPG_l.jpg",
          medium:
            "https://p.ptcdn.info/362/001/000/105323_4752627382_---------------JPG_m.jpg",
          small:
            "https://p.ptcdn.info/362/001/000/105323_4752627382_---------------JPG_s.jpg",
        },
        slug: "/profile/105323",
      },
      is_cr: true,
      is_sr: false,
      is_br: false,
      tags: [
        {
          name: "เที่ยวยุโรป",
          slug: "เที่ยวยุโรป",
        },
        {
          name: "ประเทศเยอรมนี",
          slug: "ประเทศเยอรมนี",
        },
        {
          name: "เที่ยวต่างประเทศ",
          slug: "เที่ยวต่างประเทศ",
        },
        {
          name: "Backpack",
          slug: "Backpack",
        },
      ],
      timestamp: "1720605600000",
    },
    {
      topic_id: 42833312,
      title:
        "ความรู้สึกของเราที่แตกสลายไปแล้ว มีวิธีจัดการความเศร้านี้ยังไงกันบ้างคะ",
      topic_type: 3,
      created_time: "2024-07-10T02:03:06Z",
      views_count: 1119,
      comments_count: 56,
      votes_count: 1,
      author: {
        id: 3231147,
        name: "สมาชิกหมายเลข 3231147",
        avatar: {
          large: "https://ptcdn.info/images/avatar_member_default.png",
          medium: "https://ptcdn.info/images/avatar_member_default.png",
          small: "https://ptcdn.info/images/avatar_member_default.png",
        },
        slug: "/profile/3231147",
      },
      tags: [
        {
          name: "ศาลาคนเศร้า",
          slug: "ศาลาคนเศร้า",
        },
        {
          name: "ปัญหาชีวิต",
          slug: "ปัญหาชีวิต",
        },
        {
          name: "ปัญหาวัยรุ่น",
          slug: "ปัญหาวัยรุ่น",
        },
        {
          name: "สุขภาพจิต",
          slug: "สุขภาพจิต",
        },
        {
          name: "จิตวิทยา (Psychology)",
          slug: "จิตวิทยา_(Psychology)",
        },
      ],
      timestamp: "1720603800000",
    },
    {
      topic_id: 42827852,
      title: "รีวิวชีทมาส์ก MASK MY DAY แบรนด์ summersense",
      topic_type: 4,
      created_time: "2024-07-07T08:24:16Z",
      thumbnail_url:
        "https://ptcdn.info/pick/588/000/000/lyba3p0fiw2c3fi71ZZ-s.jpg",
      views_count: 214,
      comments_count: 6,
      votes_count: 0,
      author: {
        id: 6482797,
        name: "สมาชิกหมายเลข 6482797",
        avatar: {
          original:
            "https://p.ptcdn.info/518/013/000/6482797_16226052464128_o.jpg",
          large:
            "https://p.ptcdn.info/518/013/000/6482797_16226052464128_l.jpg",
          medium:
            "https://p.ptcdn.info/518/013/000/6482797_16226052464128_m.jpg",
          small:
            "https://p.ptcdn.info/518/013/000/6482797_16226052464128_s.jpg",
        },
        slug: "/profile/6482797",
      },
      is_cr: false,
      is_sr: true,
      is_br: false,
      tags: [
        {
          name: "Skin Care",
          slug: "Skin_Care",
        },
        {
          name: "ความงาม",
          slug: "ความงาม",
        },
        {
          name: "เครื่องสำอางเกาหลี",
          slug: "เครื่องสำอางเกาหลี",
        },
        {
          name: "มาส์กหน้า",
          slug: "มาส์กหน้า",
        },
      ],
      timestamp: "1720602900000",
    },
    {
      topic_id: 42833239,
      title:
        "อะไรเป็นตัวชี้วัดว่าชีวิตของคน คนนั้นประสบความสำเร็จแล้วในการดำเนินชีวิต",
      topic_type: 3,
      created_time: "2024-07-10T00:58:23Z",
      views_count: 1131,
      comments_count: 68,
      votes_count: 1,
      author: {
        id: 4257726,
        name: "สมาชิกหมายเลข 4257726",
        avatar: {
          original:
            "https://p.ptcdn.info/502/011/000/4257726_8562662031_pantip_o.jpg",
          large:
            "https://p.ptcdn.info/502/011/000/4257726_8562662031_pantip_l.jpg",
          medium:
            "https://p.ptcdn.info/502/011/000/4257726_8562662031_pantip_m.jpg",
          small:
            "https://p.ptcdn.info/502/011/000/4257726_8562662031_pantip_s.jpg",
        },
        slug: "/profile/4257726",
      },
      tags: [
        {
          name: "การลงทุน",
          slug: "การลงทุน",
        },
        {
          name: "การออมเงิน",
          slug: "การออมเงิน",
        },
        {
          name: "การวางแผนการเงิน",
          slug: "การวางแผนการเงิน",
        },
        {
          name: "ธุรกิจส่วนตัว",
          slug: "ธุรกิจส่วนตัว",
        },
        {
          name: "อาชีพหลังเกษียณ",
          slug: "อาชีพหลังเกษียณ",
        },
      ],
      timestamp: "1720602000000",
    },
    {
      topic_id: 42832977,
      title:
        "มีใครมีเพลงของDisney ที่รู้สึกว่าเนื้อเพลงความหมายลึกซึ้งบ้างมั้ยคับ 🥹",
      topic_type: 1,
      created_time: "2024-07-09T16:57:25Z",
      views_count: 494,
      comments_count: 21,
      votes_count: 0,
      author: {
        id: 8260875,
        name: "สมาชิกหมายเลข 8260875",
        avatar: {
          original:
            "https://p.ptcdn.info/762/015/000/8260875_17198477882986_o.jpg",
          large:
            "https://p.ptcdn.info/762/015/000/8260875_17198477882986_l.jpg",
          medium:
            "https://p.ptcdn.info/762/015/000/8260875_17198477882986_m.jpg",
          small:
            "https://p.ptcdn.info/762/015/000/8260875_17198477882986_s.jpg",
        },
        slug: "/profile/8260875",
      },
      tags: [
        {
          name: "การ์ตูน",
          slug: "การ์ตูน",
        },
        {
          name: "Disney",
          slug: "Disney",
        },
        {
          name: "เพลง",
          slug: "เพลง",
        },
        {
          name: "เพลงการ์ตูน",
          slug: "เพลงการ์ตูน",
        },
        {
          name: "ประวัติศาสตร์",
          slug: "ประวัติศาสตร์",
        },
      ],
      timestamp: "1720601100000",
    },
    {
      topic_id: 42833259,
      title: "🪴🏫 มุมสวนเล็กๆหน้าบ้าน 🏫🪴",
      topic_type: 1,
      created_time: "2024-07-10T01:16:52Z",
      thumbnail_url:
        "https://ptcdn.info/pick/588/000/000/sgdv3016rjf0UMVOGR7CT-s.jpg",
      views_count: 485,
      comments_count: 29,
      votes_count: 4,
      author: {
        id: 690985,
        name: "สาวโรงงานชั้นสิบแปด",
        avatar: {
          original:
            "http://p.ptcdn.info/540/000/000/690985_3478592992_-1--1-JPG_o.jpg",
          large:
            "https://p.ptcdn.info/540/000/000/690985_3478592992_-1--1-JPG_l.jpg",
          medium:
            "https://p.ptcdn.info/540/000/000/690985_3478592992_-1--1-JPG_m.jpg",
          small:
            "https://p.ptcdn.info/540/000/000/690985_3478592992_-1--1-JPG_s.jpg",
        },
        slug: "/profile/690985",
      },
      tags: [
        {
          name: "ตกแต่งบ้าน",
          slug: "ตกแต่งบ้าน",
        },
        {
          name: "จัดสวน",
          slug: "จัดสวน",
        },
        {
          name: "บ้าน",
          slug: "บ้าน",
        },
      ],
      timestamp: "1720600200000",
    },
    {
      topic_id: 42832065,
      title:
        "ทริปชิลๆ เที่ยวสุโขทัย วัดพิพัฒน์มงคล สวรรคโลก ศรีสัชนาลัย บ้านนาต้นจั่น อุทยานประวัติศาสตร์สุโขทัย By ขวัญสายชิล 86",
      topic_type: 1,
      created_time: "2024-07-09T09:16:30Z",
      thumbnail_url:
        "https://ptcdn.info/pick/588/000/000/sgcnjh1pkojlqhmne75pT-s.jpg",
      views_count: 586,
      comments_count: 24,
      votes_count: 3,
      author: {
        id: 4766801,
        name: "สมาชิกหมายเลข 4766801",
        avatar: {
          original:
            "https://p.ptcdn.info/893/009/000/4766801_43053306131536134390_DSC08686-JPG_o.jpg",
          large:
            "https://p.ptcdn.info/893/009/000/4766801_43053306131536134390_DSC08686-JPG_l.jpg",
          medium:
            "https://p.ptcdn.info/893/009/000/4766801_43053306131536134390_DSC08686-JPG_m.jpg",
          small:
            "https://p.ptcdn.info/893/009/000/4766801_43053306131536134390_DSC08686-JPG_s.jpg",
        },
        slug: "/profile/4766801",
      },
      tags: [
        {
          name: "ทริปถ่ายรูป",
          slug: "ทริปถ่ายรูป",
        },
        {
          name: "ภาพถ่าย",
          slug: "ภาพถ่าย",
        },
        {
          name: "บันทึกนักเดินทาง",
          slug: "บันทึกนักเดินทาง",
        },
        {
          name: "จังหวัดสุโขทัย",
          slug: "จังหวัดสุโขทัย",
        },
        {
          name: "เที่ยวไทย",
          slug: "เที่ยวไทย",
        },
      ],
      timestamp: "1720599600000",
    },
    {
      topic_id: 42831732,
      title: "แปลกดีนะ อะไรที่ผมเคยมองคนแก่ว่าตลก วันนี้ผมกลับทำแบบนั้นเลย",
      topic_type: 3,
      created_time: "2024-07-09T06:32:35Z",
      views_count: 2825,
      comments_count: 70,
      votes_count: 6,
      author: {
        id: 6397398,
        name: "สมาชิกหมายเลข 6397398",
        avatar: {
          large: "https://ptcdn.info/images/avatar_member_default.png",
          medium: "https://ptcdn.info/images/avatar_member_default.png",
          small: "https://ptcdn.info/images/avatar_member_default.png",
        },
        slug: "/profile/6397398",
      },
      tags: [
        {
          name: "ชีวิตวัยรุ่น",
          slug: "ชีวิตวัยรุ่น",
        },
        {
          name: "สุขภาพจิต",
          slug: "สุขภาพจิต",
        },
        {
          name: "สังคมผู้สูงอายุ",
          slug: "สังคมผู้สูงอายุ",
        },
        {
          name: "ต้นไม้",
          slug: "ต้นไม้",
        },
      ],
      timestamp: "1720598400000",
    },
    {
      topic_id: 42832066,
      title: "ชมสวนผสม ปลูกกาแฟเพิ่มอีกสักหน่อย🙂🙂",
      topic_type: 1,
      created_time: "2024-07-09T09:17:08Z",
      thumbnail_url:
        "https://ptcdn.info/pick/588/000/000/lye6ny83i7LhbudGmSr-s.jpg",
      views_count: 720,
      comments_count: 31,
      votes_count: 1,
      author: {
        id: 2933266,
        name: "สมาชิกหมายเลข 2933266",
        avatar: {
          original:
            "http://p.ptcdn.info/783/006/000/2933266_9394134430_2903568-sentai4007_o.jpg",
          large:
            "https://p.ptcdn.info/783/006/000/2933266_9394134430_2903568-sentai4007_l.jpg",
          medium:
            "https://p.ptcdn.info/783/006/000/2933266_9394134430_2903568-sentai4007_m.jpg",
          small:
            "https://p.ptcdn.info/783/006/000/2933266_9394134430_2903568-sentai4007_s.jpg",
        },
        slug: "/profile/2933266",
      },
      tags: [
        {
          name: "กาแฟ",
          slug: "กาแฟ",
        },
        {
          name: "ต้นไม้",
          slug: "ต้นไม้",
        },
        {
          name: "เกษตรกร",
          slug: "เกษตรกร",
        },
        {
          name: "จัดสวน",
          slug: "จัดสวน",
        },
        {
          name: "ผลไม้",
          slug: "ผลไม้",
        },
      ],
      timestamp: "1720597500000",
    },
    {
      topic_id: 42831975,
      title: "ความรักต้องมีความเชื่อใจ แล้วต้องเชื่อใจอย่างไรถึงจะพอดี",
      topic_type: 1,
      created_time: "2024-07-09T08:31:28Z",
      views_count: 446,
      comments_count: 16,
      votes_count: 0,
      author: {
        id: 8265374,
        name: "สมาชิกหมายเลข 8265374",
        avatar: {
          large: "https://ptcdn.info/images/avatar_member_default.png",
          medium: "https://ptcdn.info/images/avatar_member_default.png",
          small: "https://ptcdn.info/images/avatar_member_default.png",
        },
        slug: "/profile/8265374",
      },
      tags: [
        {
          name: "ประสบการณ์ความรัก",
          slug: "ประสบการณ์ความรัก",
        },
        {
          name: "ความรักวัยทำงาน",
          slug: "ความรักวัยทำงาน",
        },
        {
          name: "ความรักสูงวัย",
          slug: "ความรักสูงวัย",
        },
      ],
      timestamp: "1720596600000",
    },
    {
      topic_id: 42833240,
      title:
        "พ่อแม่ ที่ไม่มีทรัพย์สินไว้ให้ลูก และไม่อยากเป็นภาระลูก ในวัยชรา ใครมีประสบการณ์ บ้าง",
      topic_type: 3,
      created_time: "2024-07-10T01:00:09Z",
      views_count: 1718,
      comments_count: 53,
      votes_count: 0,
      author: {
        id: 3215347,
        name: "สมาชิกหมายเลข 3215347",
        avatar: {
          large: "https://ptcdn.info/images/avatar_member_default.png",
          medium: "https://ptcdn.info/images/avatar_member_default.png",
          small: "https://ptcdn.info/images/avatar_member_default.png",
        },
        slug: "/profile/3215347",
      },
      tags: [
        {
          name: "ปัญหาชีวิต",
          slug: "ปัญหาชีวิต",
        },
        {
          name: "สังคมคุณแม่",
          slug: "สังคมคุณแม่",
        },
        {
          name: "Single Mom",
          slug: "Single_Mom",
        },
        {
          name: "สังคมผู้สูงอายุ",
          slug: "สังคมผู้สูงอายุ",
        },
      ],
      timestamp: "1720595700000",
    },
    {
      topic_id: 42832090,
      title:
        "เพื่อนๆเริ่มรู้สึกว่า เรียนเลข หรือภาษาอังกฤษ ไม่รู้เรื่อง ตั้งแต่ชั้นไหนคะ",
      topic_type: 1,
      created_time: "2024-07-09T09:28:47Z",
      views_count: 2072,
      comments_count: 88,
      votes_count: 1,
      author: {
        id: 97771,
        name: "SCHIST",
        avatar: {
          large: "https://ptcdn.info/images/avatar_member_default.png",
          medium: "https://ptcdn.info/images/avatar_member_default.png",
          small: "https://ptcdn.info/images/avatar_member_default.png",
        },
        slug: "/profile/97771",
      },
      tags: [
        {
          name: "ภาษาต่างประเทศ",
          slug: "ภาษาต่างประเทศ",
        },
        {
          name: "คณิตศาสตร์",
          slug: "คณิตศาสตร์",
        },
        {
          name: "วิทยาศาสตร์",
          slug: "วิทยาศาสตร์",
        },
        {
          name: "การศึกษา",
          slug: "การศึกษา",
        },
        {
          name: "ปัญหาชีวิต",
          slug: "ปัญหาชีวิต",
        },
      ],
      timestamp: "1720594800000",
    },
    {
      topic_id: 42832316,
      title:
        "BANGTAN TV 📺 ปล่อยคลิป  BTS  เบื้องหลังรัว ๆ  7  คลิป   ต้อนรับ ARMY_DAY 🎉",
      topic_type: 1,
      created_time: "2024-07-09T11:25:00Z",
      thumbnail_url:
        "https://ptcdn.info/pick/588/000/000/lyebsok4iPWX0UE6jVA-s.jpg",
      views_count: 512,
      comments_count: 15,
      votes_count: 10,
      author: {
        id: 1445123,
        name: "สมาชิกหมายเลข 1445123",
        avatar: {
          original:
            "http://p.ptcdn.info/405/003/000/1445123_0469571148_daa43fa31c0a555641687564422a9321_o.jpg",
          large:
            "https://p.ptcdn.info/405/003/000/1445123_0469571148_daa43fa31c0a555641687564422a9321_l.jpg",
          medium:
            "https://p.ptcdn.info/405/003/000/1445123_0469571148_daa43fa31c0a555641687564422a9321_m.jpg",
          small:
            "https://p.ptcdn.info/405/003/000/1445123_0469571148_daa43fa31c0a555641687564422a9321_s.jpg",
        },
        slug: "/profile/1445123",
      },
      tags: [
        {
          name: "K-POP",
          slug: "K-POP",
        },
        {
          name: "BTC (หุ้น)",
          slug: "BTC_(หุ้น)",
        },
      ],
      timestamp: "1720593900000",
    },
    {
      topic_id: 42832650,
      title:
        "Individual Awards of The 22nd Asian Women's U20 Volleyball Championship (น้องเฟิร์น ได้รางวัล)",
      topic_type: 1,
      created_time: "2024-07-09T13:54:32Z",
      thumbnail_url:
        "https://ptcdn.info/pick/588/000/000/sgczy011c5jd4t32MENdP-s.jpg",
      views_count: 2955,
      comments_count: 30,
      votes_count: 3,
      author: {
        id: 170168,
        name: "nongmoss",
        avatar: {
          original: "",
          large: "https://ptcdn.info/images/avatar_member_default.png",
          medium: "https://ptcdn.info/images/avatar_member_default.png",
          small: "https://ptcdn.info/images/avatar_member_default.png",
        },
        slug: "/profile/170168",
      },
      tags: [
        {
          name: "วอลเลย์บอล",
          slug: "วอลเลย์บอล",
        },
      ],
      timestamp: "1720593000000",
    },
    {
      topic_id: 42833494,
      title:
        "' ขายหัวเราะ ' ระหว่างพี่ต่าย กับ พี่นิค คุณชอบงานของใครมากกว่าและใครฮากวนโอ๊ยกว่ากัน (มีตัวอย่าง)",
      topic_type: 3,
      created_time: "2024-07-10T03:42:52Z",
      thumbnail_url:
        "https://ptcdn.info/pick/588/000/000/lyfaj5jkinvmcUV7sX6-s.jpg",
      views_count: 1088,
      comments_count: 39,
      votes_count: 1,
      author: {
        id: 3992813,
        name: "คุกกี้คามุอิ",
        avatar: {
          original:
            "https://p.ptcdn.info/722/015/000/3992813_17179417193474_o.png",
          large:
            "https://p.ptcdn.info/722/015/000/3992813_17179417193474_l.jpg",
          medium:
            "https://p.ptcdn.info/722/015/000/3992813_17179417193474_m.jpg",
          small:
            "https://p.ptcdn.info/722/015/000/3992813_17179417193474_s.jpg",
        },
        slug: "/profile/3992813",
      },
      tags: [
        {
          name: "ขายหัวเราะ",
          slug: "ขายหัวเราะ",
        },
        {
          name: "การ์ตูน",
          slug: "การ์ตูน",
        },
      ],
      timestamp: "1720592100000",
    },
    {
      topic_id: 42832612,
      title:
        "ตามหลักร่างกายและจิตวิทยาเราสามารถฝึกจิตให้นอนหลับชินกับเสียงคนปิดประตูเสียงดังในหอพักได้ไหมคะ",
      topic_type: 3,
      created_time: "2024-07-09T13:39:45Z",
      views_count: 861,
      comments_count: 40,
      votes_count: 0,
      author: {
        id: 392226,
        name: "ไทยสเปน",
        avatar: {
          large: "https://ptcdn.info/images/avatar_member_default.png",
          medium: "https://ptcdn.info/images/avatar_member_default.png",
          small: "https://ptcdn.info/images/avatar_member_default.png",
        },
        slug: "/profile/392226",
      },
      tags: [
        {
          name: "หอพัก",
          slug: "หอพัก",
        },
        {
          name: "ปฏิบัติธรรม",
          slug: "ปฏิบัติธรรม",
        },
        {
          name: "สุขภาพจิต",
          slug: "สุขภาพจิต",
        },
        {
          name: "มลพิษทางเสียง",
          slug: "มลพิษทางเสียง",
        },
        {
          name: "สุขภาพกายผู้สูงอายุ",
          slug: "สุขภาพกายผู้สูงอายุ",
        },
      ],
      timestamp: "1720591200000",
    },
    {
      topic_id: 42832013,
      title:
        "กรมอุตุฯ คาดหมายลักษณะอากาศประเทศไทย วันที่๙-๑๕กรกฎาคม ยังคงมีฝนฟ้าคะนอง และมีฝนตกหนักมากบางพื้นที่",
      topic_type: 1,
      created_time: "2024-07-09T08:51:39Z",
      thumbnail_url:
        "https://ptcdn.info/pick/588/000/000/lye68ifiiDaOjtx4tak-s.jpg",
      views_count: 658,
      comments_count: 19,
      votes_count: 2,
      author: {
        id: 196472,
        name: "ต้นโพธิ์ต้นไทร",
        avatar: {
          original:
            "http://p.ptcdn.info/080/000/000/196472_8212739817_-------------_o.jpg",
          large:
            "https://p.ptcdn.info/080/000/000/196472_8212739817_-------------_l.jpg",
          medium:
            "https://p.ptcdn.info/080/000/000/196472_8212739817_-------------_m.jpg",
          small:
            "https://p.ptcdn.info/080/000/000/196472_8212739817_-------------_s.jpg",
        },
        slug: "/profile/196472",
      },
      tags: [
        {
          name: "ภูมิศาสตร์",
          slug: "ภูมิศาสตร์",
        },
        {
          name: "ป้องกันน้ำท่วมบ้าน",
          slug: "ป้องกันน้ำท่วมบ้าน",
        },
        {
          name: "อนุรักษ์สิ่งแวดล้อม",
          slug: "อนุรักษ์สิ่งแวดล้อม",
        },
        {
          name: "เที่ยวทะเล",
          slug: "เที่ยวทะเล",
        },
        {
          name: "พยากรณ์อากาศ",
          slug: "พยากรณ์อากาศ",
        },
      ],
      timestamp: "1720590300000",
    },
    {
      topic_id: 42833207,
      title:
        'แบ่งปันเมนู "Homemade Mascapone cheese cake" หน้าไหม้แตก กินคู่กับ Blueberry sauce',
      topic_type: 1,
      created_time: "2024-07-10T00:14:22Z",
      thumbnail_url:
        "https://ptcdn.info/pick/588/000/000/lyf37vmuiA8OnOylx54-s.jpg",
      views_count: 434,
      comments_count: 27,
      votes_count: 5,
      author: {
        id: 455220,
        name: "fillerneck",
        avatar: {
          original:
            "https://p.ptcdn.info/549/015/000/455220_17097978430517_o.jpg",
          large: "https://p.ptcdn.info/549/015/000/455220_17097978430517_l.jpg",
          medium:
            "https://p.ptcdn.info/549/015/000/455220_17097978430517_m.jpg",
          small: "https://p.ptcdn.info/549/015/000/455220_17097978430517_s.jpg",
        },
        slug: "/profile/455220",
      },
      tags: [
        {
          name: "เบเกอรี่",
          slug: "เบเกอรี่",
        },
      ],
      timestamp: "1720588500000",
    },
    {
      topic_id: 42835137,
      title: "Degradi บาดเจ็บ l Nervini และ Omoruyi ถูกเรียกเข้าแคมป์",
      topic_type: 1,
      created_time: "2024-07-10T20:51:57Z",
      thumbnail_url:
        "https://ptcdn.info/pick/588/000/000/lygbcc2ri98DcLvyjGC-s.png",
      views_count: 0,
      comments_count: 24,
      votes_count: 0,
      author: {
        id: 3072997,
        name: "Buckley",
        avatar: {
          original:
            "https://p.ptcdn.info/772/015/000/3072997_62837109011720285110_IMG-0350-JPG_o.jpg",
          large:
            "https://p.ptcdn.info/772/015/000/3072997_62837109011720285110_IMG-0350-JPG_l.jpg",
          medium:
            "https://p.ptcdn.info/772/015/000/3072997_62837109011720285110_IMG-0350-JPG_m.jpg",
          small:
            "https://p.ptcdn.info/772/015/000/3072997_62837109011720285110_IMG-0350-JPG_s.jpg",
        },
        slug: "/profile/3072997",
      },
      tags: [
        {
          name: "วอลเลย์บอล",
          slug: "วอลเลย์บอล",
        },
      ],
      timestamp: "1720665060000",
    },
    {
      topic_id: 42834443,
      title: "🎤 เช็คลิสต์ศิลปิน ‘เดบิวต์ | คัมแบค’ เดือน ‘กรกฎาคม’ 2024 ♫ ♬",
      topic_type: 1,
      created_time: "2024-07-10T11:50:00Z",
      thumbnail_url:
        "https://ptcdn.info/pick/588/000/000/1953846545668e7829e8071-1720612905-s.jpg",
      views_count: 559,
      comments_count: 23,
      votes_count: 0,
      author: {
        id: 789,
        name: "เพี้ยน จัง แก",
        avatar: {
          original: "https://p.ptcdn.info/426/015/000/789_17036557144800_o.jpg",
          large: "https://p.ptcdn.info/426/015/000/789_17036557144800_l.jpg",
          medium: "https://p.ptcdn.info/426/015/000/789_17036557144800_m.jpg",
          small: "https://p.ptcdn.info/426/015/000/789_17036557144800_s.jpg",
        },
        slug: "/profile/789",
      },
      tags: [
        {
          name: "K-POP",
          slug: "K-POP",
        },
        {
          name: "NCT (นักร้องนักดนตรี)",
          slug: "NCT_(นักร้องนักดนตรี)",
        },
        {
          name: "TWICE (นักร้องนักดนตรี)",
          slug: "TWICE_(นักร้องนักดนตรี)",
        },
        {
          name: "Stray Kids (นักร้องนักดนตรี)",
          slug: "Stray_Kids_(นักร้องนักดนตรี)",
        },
        {
          name: "ENHYPEN (นักร้องนักดนตรี)",
          slug: "ENHYPEN_(นักร้องนักดนตรี)",
        },
      ],
      timestamp: "1720618200000",
    },
    {
      topic_id: 42833642,
      title: "เที่ยว Lubeck เมืองน่ารักทางเหนือของเยอรมัน :Trip 2024 ep.3",
      topic_type: 4,
      created_time: "2024-07-10T05:02:10Z",
      thumbnail_url:
        "https://ptcdn.info/pick/588/000/000/lyfd4of9iBUqLy2avir-s.jpg",
      views_count: 485,
      comments_count: 31,
      votes_count: 10,
      author: {
        id: 105323,
        name: "thai orchid",
        avatar: {
          original:
            "http://p.ptcdn.info/362/001/000/105323_4752627382_---------------JPG_o.jpg",
          large:
            "https://p.ptcdn.info/362/001/000/105323_4752627382_---------------JPG_l.jpg",
          medium:
            "https://p.ptcdn.info/362/001/000/105323_4752627382_---------------JPG_m.jpg",
          small:
            "https://p.ptcdn.info/362/001/000/105323_4752627382_---------------JPG_s.jpg",
        },
        slug: "/profile/105323",
      },
      is_cr: true,
      is_sr: false,
      is_br: false,
      tags: [
        {
          name: "เที่ยวยุโรป",
          slug: "เที่ยวยุโรป",
        },
        {
          name: "ประเทศเยอรมนี",
          slug: "ประเทศเยอรมนี",
        },
        {
          name: "เที่ยวต่างประเทศ",
          slug: "เที่ยวต่างประเทศ",
        },
        {
          name: "Backpack",
          slug: "Backpack",
        },
      ],
      timestamp: "1720605600000",
    },
    {
      topic_id: 42833312,
      title:
        "ความรู้สึกของเราที่แตกสลายไปแล้ว มีวิธีจัดการความเศร้านี้ยังไงกันบ้างคะ",
      topic_type: 3,
      created_time: "2024-07-10T02:03:06Z",
      views_count: 1119,
      comments_count: 56,
      votes_count: 1,
      author: {
        id: 3231147,
        name: "สมาชิกหมายเลข 3231147",
        avatar: {
          large: "https://ptcdn.info/images/avatar_member_default.png",
          medium: "https://ptcdn.info/images/avatar_member_default.png",
          small: "https://ptcdn.info/images/avatar_member_default.png",
        },
        slug: "/profile/3231147",
      },
      tags: [
        {
          name: "ศาลาคนเศร้า",
          slug: "ศาลาคนเศร้า",
        },
        {
          name: "ปัญหาชีวิต",
          slug: "ปัญหาชีวิต",
        },
        {
          name: "ปัญหาวัยรุ่น",
          slug: "ปัญหาวัยรุ่น",
        },
        {
          name: "สุขภาพจิต",
          slug: "สุขภาพจิต",
        },
        {
          name: "จิตวิทยา (Psychology)",
          slug: "จิตวิทยา_(Psychology)",
        },
      ],
      timestamp: "1720603800000",
    },
    {
      topic_id: 42827852,
      title: "รีวิวชีทมาส์ก MASK MY DAY แบรนด์ summersense",
      topic_type: 4,
      created_time: "2024-07-07T08:24:16Z",
      thumbnail_url:
        "https://ptcdn.info/pick/588/000/000/lyba3p0fiw2c3fi71ZZ-s.jpg",
      views_count: 214,
      comments_count: 6,
      votes_count: 0,
      author: {
        id: 6482797,
        name: "สมาชิกหมายเลข 6482797",
        avatar: {
          original:
            "https://p.ptcdn.info/518/013/000/6482797_16226052464128_o.jpg",
          large:
            "https://p.ptcdn.info/518/013/000/6482797_16226052464128_l.jpg",
          medium:
            "https://p.ptcdn.info/518/013/000/6482797_16226052464128_m.jpg",
          small:
            "https://p.ptcdn.info/518/013/000/6482797_16226052464128_s.jpg",
        },
        slug: "/profile/6482797",
      },
      is_cr: false,
      is_sr: true,
      is_br: false,
      tags: [
        {
          name: "Skin Care",
          slug: "Skin_Care",
        },
        {
          name: "ความงาม",
          slug: "ความงาม",
        },
        {
          name: "เครื่องสำอางเกาหลี",
          slug: "เครื่องสำอางเกาหลี",
        },
        {
          name: "มาส์กหน้า",
          slug: "มาส์กหน้า",
        },
      ],
      timestamp: "1720602900000",
    },
    {
      topic_id: 42833239,
      title:
        "อะไรเป็นตัวชี้วัดว่าชีวิตของคน คนนั้นประสบความสำเร็จแล้วในการดำเนินชีวิต",
      topic_type: 3,
      created_time: "2024-07-10T00:58:23Z",
      views_count: 1131,
      comments_count: 68,
      votes_count: 1,
      author: {
        id: 4257726,
        name: "สมาชิกหมายเลข 4257726",
        avatar: {
          original:
            "https://p.ptcdn.info/502/011/000/4257726_8562662031_pantip_o.jpg",
          large:
            "https://p.ptcdn.info/502/011/000/4257726_8562662031_pantip_l.jpg",
          medium:
            "https://p.ptcdn.info/502/011/000/4257726_8562662031_pantip_m.jpg",
          small:
            "https://p.ptcdn.info/502/011/000/4257726_8562662031_pantip_s.jpg",
        },
        slug: "/profile/4257726",
      },
      tags: [
        {
          name: "การลงทุน",
          slug: "การลงทุน",
        },
        {
          name: "การออมเงิน",
          slug: "การออมเงิน",
        },
        {
          name: "การวางแผนการเงิน",
          slug: "การวางแผนการเงิน",
        },
        {
          name: "ธุรกิจส่วนตัว",
          slug: "ธุรกิจส่วนตัว",
        },
        {
          name: "อาชีพหลังเกษียณ",
          slug: "อาชีพหลังเกษียณ",
        },
      ],
      timestamp: "1720602000000",
    },
    {
      topic_id: 42832977,
      title:
        "มีใครมีเพลงของDisney ที่รู้สึกว่าเนื้อเพลงความหมายลึกซึ้งบ้างมั้ยคับ 🥹",
      topic_type: 1,
      created_time: "2024-07-09T16:57:25Z",
      views_count: 494,
      comments_count: 21,
      votes_count: 0,
      author: {
        id: 8260875,
        name: "สมาชิกหมายเลข 8260875",
        avatar: {
          original:
            "https://p.ptcdn.info/762/015/000/8260875_17198477882986_o.jpg",
          large:
            "https://p.ptcdn.info/762/015/000/8260875_17198477882986_l.jpg",
          medium:
            "https://p.ptcdn.info/762/015/000/8260875_17198477882986_m.jpg",
          small:
            "https://p.ptcdn.info/762/015/000/8260875_17198477882986_s.jpg",
        },
        slug: "/profile/8260875",
      },
      tags: [
        {
          name: "การ์ตูน",
          slug: "การ์ตูน",
        },
        {
          name: "Disney",
          slug: "Disney",
        },
        {
          name: "เพลง",
          slug: "เพลง",
        },
        {
          name: "เพลงการ์ตูน",
          slug: "เพลงการ์ตูน",
        },
        {
          name: "ประวัติศาสตร์",
          slug: "ประวัติศาสตร์",
        },
      ],
      timestamp: "1720601100000",
    },
    {
      topic_id: 42833259,
      title: "🪴🏫 มุมสวนเล็กๆหน้าบ้าน 🏫🪴",
      topic_type: 1,
      created_time: "2024-07-10T01:16:52Z",
      thumbnail_url:
        "https://ptcdn.info/pick/588/000/000/sgdv3016rjf0UMVOGR7CT-s.jpg",
      views_count: 485,
      comments_count: 29,
      votes_count: 4,
      author: {
        id: 690985,
        name: "สาวโรงงานชั้นสิบแปด",
        avatar: {
          original:
            "http://p.ptcdn.info/540/000/000/690985_3478592992_-1--1-JPG_o.jpg",
          large:
            "https://p.ptcdn.info/540/000/000/690985_3478592992_-1--1-JPG_l.jpg",
          medium:
            "https://p.ptcdn.info/540/000/000/690985_3478592992_-1--1-JPG_m.jpg",
          small:
            "https://p.ptcdn.info/540/000/000/690985_3478592992_-1--1-JPG_s.jpg",
        },
        slug: "/profile/690985",
      },
      tags: [
        {
          name: "ตกแต่งบ้าน",
          slug: "ตกแต่งบ้าน",
        },
        {
          name: "จัดสวน",
          slug: "จัดสวน",
        },
        {
          name: "บ้าน",
          slug: "บ้าน",
        },
      ],
      timestamp: "1720600200000",
    },
    {
      topic_id: 42832065,
      title:
        "ทริปชิลๆ เที่ยวสุโขทัย วัดพิพัฒน์มงคล สวรรคโลก ศรีสัชนาลัย บ้านนาต้นจั่น อุทยานประวัติศาสตร์สุโขทัย By ขวัญสายชิล 86",
      topic_type: 1,
      created_time: "2024-07-09T09:16:30Z",
      thumbnail_url:
        "https://ptcdn.info/pick/588/000/000/sgcnjh1pkojlqhmne75pT-s.jpg",
      views_count: 586,
      comments_count: 24,
      votes_count: 3,
      author: {
        id: 4766801,
        name: "สมาชิกหมายเลข 4766801",
        avatar: {
          original:
            "https://p.ptcdn.info/893/009/000/4766801_43053306131536134390_DSC08686-JPG_o.jpg",
          large:
            "https://p.ptcdn.info/893/009/000/4766801_43053306131536134390_DSC08686-JPG_l.jpg",
          medium:
            "https://p.ptcdn.info/893/009/000/4766801_43053306131536134390_DSC08686-JPG_m.jpg",
          small:
            "https://p.ptcdn.info/893/009/000/4766801_43053306131536134390_DSC08686-JPG_s.jpg",
        },
        slug: "/profile/4766801",
      },
      tags: [
        {
          name: "ทริปถ่ายรูป",
          slug: "ทริปถ่ายรูป",
        },
        {
          name: "ภาพถ่าย",
          slug: "ภาพถ่าย",
        },
        {
          name: "บันทึกนักเดินทาง",
          slug: "บันทึกนักเดินทาง",
        },
        {
          name: "จังหวัดสุโขทัย",
          slug: "จังหวัดสุโขทัย",
        },
        {
          name: "เที่ยวไทย",
          slug: "เที่ยวไทย",
        },
      ],
      timestamp: "1720599600000",
    },
    {
      topic_id: 42831732,
      title: "แปลกดีนะ อะไรที่ผมเคยมองคนแก่ว่าตลก วันนี้ผมกลับทำแบบนั้นเลย",
      topic_type: 3,
      created_time: "2024-07-09T06:32:35Z",
      views_count: 2825,
      comments_count: 70,
      votes_count: 6,
      author: {
        id: 6397398,
        name: "สมาชิกหมายเลข 6397398",
        avatar: {
          large: "https://ptcdn.info/images/avatar_member_default.png",
          medium: "https://ptcdn.info/images/avatar_member_default.png",
          small: "https://ptcdn.info/images/avatar_member_default.png",
        },
        slug: "/profile/6397398",
      },
      tags: [
        {
          name: "ชีวิตวัยรุ่น",
          slug: "ชีวิตวัยรุ่น",
        },
        {
          name: "สุขภาพจิต",
          slug: "สุขภาพจิต",
        },
        {
          name: "สังคมผู้สูงอายุ",
          slug: "สังคมผู้สูงอายุ",
        },
        {
          name: "ต้นไม้",
          slug: "ต้นไม้",
        },
      ],
      timestamp: "1720598400000",
    },
    {
      topic_id: 42832066,
      title: "ชมสวนผสม ปลูกกาแฟเพิ่มอีกสักหน่อย🙂🙂",
      topic_type: 1,
      created_time: "2024-07-09T09:17:08Z",
      thumbnail_url:
        "https://ptcdn.info/pick/588/000/000/lye6ny83i7LhbudGmSr-s.jpg",
      views_count: 720,
      comments_count: 31,
      votes_count: 1,
      author: {
        id: 2933266,
        name: "สมาชิกหมายเลข 2933266",
        avatar: {
          original:
            "http://p.ptcdn.info/783/006/000/2933266_9394134430_2903568-sentai4007_o.jpg",
          large:
            "https://p.ptcdn.info/783/006/000/2933266_9394134430_2903568-sentai4007_l.jpg",
          medium:
            "https://p.ptcdn.info/783/006/000/2933266_9394134430_2903568-sentai4007_m.jpg",
          small:
            "https://p.ptcdn.info/783/006/000/2933266_9394134430_2903568-sentai4007_s.jpg",
        },
        slug: "/profile/2933266",
      },
      tags: [
        {
          name: "กาแฟ",
          slug: "กาแฟ",
        },
        {
          name: "ต้นไม้",
          slug: "ต้นไม้",
        },
        {
          name: "เกษตรกร",
          slug: "เกษตรกร",
        },
        {
          name: "จัดสวน",
          slug: "จัดสวน",
        },
        {
          name: "ผลไม้",
          slug: "ผลไม้",
        },
      ],
      timestamp: "1720597500000",
    },
    {
      topic_id: 42831975,
      title: "ความรักต้องมีความเชื่อใจ แล้วต้องเชื่อใจอย่างไรถึงจะพอดี",
      topic_type: 1,
      created_time: "2024-07-09T08:31:28Z",
      views_count: 446,
      comments_count: 16,
      votes_count: 0,
      author: {
        id: 8265374,
        name: "สมาชิกหมายเลข 8265374",
        avatar: {
          large: "https://ptcdn.info/images/avatar_member_default.png",
          medium: "https://ptcdn.info/images/avatar_member_default.png",
          small: "https://ptcdn.info/images/avatar_member_default.png",
        },
        slug: "/profile/8265374",
      },
      tags: [
        {
          name: "ประสบการณ์ความรัก",
          slug: "ประสบการณ์ความรัก",
        },
        {
          name: "ความรักวัยทำงาน",
          slug: "ความรักวัยทำงาน",
        },
        {
          name: "ความรักสูงวัย",
          slug: "ความรักสูงวัย",
        },
      ],
      timestamp: "1720596600000",
    },
    {
      topic_id: 42833240,
      title:
        "พ่อแม่ ที่ไม่มีทรัพย์สินไว้ให้ลูก และไม่อยากเป็นภาระลูก ในวัยชรา ใครมีประสบการณ์ บ้าง",
      topic_type: 3,
      created_time: "2024-07-10T01:00:09Z",
      views_count: 1718,
      comments_count: 53,
      votes_count: 0,
      author: {
        id: 3215347,
        name: "สมาชิกหมายเลข 3215347",
        avatar: {
          large: "https://ptcdn.info/images/avatar_member_default.png",
          medium: "https://ptcdn.info/images/avatar_member_default.png",
          small: "https://ptcdn.info/images/avatar_member_default.png",
        },
        slug: "/profile/3215347",
      },
      tags: [
        {
          name: "ปัญหาชีวิต",
          slug: "ปัญหาชีวิต",
        },
        {
          name: "สังคมคุณแม่",
          slug: "สังคมคุณแม่",
        },
        {
          name: "Single Mom",
          slug: "Single_Mom",
        },
        {
          name: "สังคมผู้สูงอายุ",
          slug: "สังคมผู้สูงอายุ",
        },
      ],
      timestamp: "1720595700000",
    },
    {
      topic_id: 42832090,
      title:
        "เพื่อนๆเริ่มรู้สึกว่า เรียนเลข หรือภาษาอังกฤษ ไม่รู้เรื่อง ตั้งแต่ชั้นไหนคะ",
      topic_type: 1,
      created_time: "2024-07-09T09:28:47Z",
      views_count: 2072,
      comments_count: 88,
      votes_count: 1,
      author: {
        id: 97771,
        name: "SCHIST",
        avatar: {
          large: "https://ptcdn.info/images/avatar_member_default.png",
          medium: "https://ptcdn.info/images/avatar_member_default.png",
          small: "https://ptcdn.info/images/avatar_member_default.png",
        },
        slug: "/profile/97771",
      },
      tags: [
        {
          name: "ภาษาต่างประเทศ",
          slug: "ภาษาต่างประเทศ",
        },
        {
          name: "คณิตศาสตร์",
          slug: "คณิตศาสตร์",
        },
        {
          name: "วิทยาศาสตร์",
          slug: "วิทยาศาสตร์",
        },
        {
          name: "การศึกษา",
          slug: "การศึกษา",
        },
        {
          name: "ปัญหาชีวิต",
          slug: "ปัญหาชีวิต",
        },
      ],
      timestamp: "1720594800000",
    },
    {
      topic_id: 42832316,
      title:
        "BANGTAN TV 📺 ปล่อยคลิป  BTS  เบื้องหลังรัว ๆ  7  คลิป   ต้อนรับ ARMY_DAY 🎉",
      topic_type: 1,
      created_time: "2024-07-09T11:25:00Z",
      thumbnail_url:
        "https://ptcdn.info/pick/588/000/000/lyebsok4iPWX0UE6jVA-s.jpg",
      views_count: 512,
      comments_count: 15,
      votes_count: 10,
      author: {
        id: 1445123,
        name: "สมาชิกหมายเลข 1445123",
        avatar: {
          original:
            "http://p.ptcdn.info/405/003/000/1445123_0469571148_daa43fa31c0a555641687564422a9321_o.jpg",
          large:
            "https://p.ptcdn.info/405/003/000/1445123_0469571148_daa43fa31c0a555641687564422a9321_l.jpg",
          medium:
            "https://p.ptcdn.info/405/003/000/1445123_0469571148_daa43fa31c0a555641687564422a9321_m.jpg",
          small:
            "https://p.ptcdn.info/405/003/000/1445123_0469571148_daa43fa31c0a555641687564422a9321_s.jpg",
        },
        slug: "/profile/1445123",
      },
      tags: [
        {
          name: "K-POP",
          slug: "K-POP",
        },
        {
          name: "BTC (หุ้น)",
          slug: "BTC_(หุ้น)",
        },
      ],
      timestamp: "1720593900000",
    },
    {
      topic_id: 42832650,
      title:
        "Individual Awards of The 22nd Asian Women's U20 Volleyball Championship (น้องเฟิร์น ได้รางวัล)",
      topic_type: 1,
      created_time: "2024-07-09T13:54:32Z",
      thumbnail_url:
        "https://ptcdn.info/pick/588/000/000/sgczy011c5jd4t32MENdP-s.jpg",
      views_count: 2955,
      comments_count: 30,
      votes_count: 3,
      author: {
        id: 170168,
        name: "nongmoss",
        avatar: {
          original: "",
          large: "https://ptcdn.info/images/avatar_member_default.png",
          medium: "https://ptcdn.info/images/avatar_member_default.png",
          small: "https://ptcdn.info/images/avatar_member_default.png",
        },
        slug: "/profile/170168",
      },
      tags: [
        {
          name: "วอลเลย์บอล",
          slug: "วอลเลย์บอล",
        },
      ],
      timestamp: "1720593000000",
    },
    {
      topic_id: 42833494,
      title:
        "' ขายหัวเราะ ' ระหว่างพี่ต่าย กับ พี่นิค คุณชอบงานของใครมากกว่าและใครฮากวนโอ๊ยกว่ากัน (มีตัวอย่าง)",
      topic_type: 3,
      created_time: "2024-07-10T03:42:52Z",
      thumbnail_url:
        "https://ptcdn.info/pick/588/000/000/lyfaj5jkinvmcUV7sX6-s.jpg",
      views_count: 1088,
      comments_count: 39,
      votes_count: 1,
      author: {
        id: 3992813,
        name: "คุกกี้คามุอิ",
        avatar: {
          original:
            "https://p.ptcdn.info/722/015/000/3992813_17179417193474_o.png",
          large:
            "https://p.ptcdn.info/722/015/000/3992813_17179417193474_l.jpg",
          medium:
            "https://p.ptcdn.info/722/015/000/3992813_17179417193474_m.jpg",
          small:
            "https://p.ptcdn.info/722/015/000/3992813_17179417193474_s.jpg",
        },
        slug: "/profile/3992813",
      },
      tags: [
        {
          name: "ขายหัวเราะ",
          slug: "ขายหัวเราะ",
        },
        {
          name: "การ์ตูน",
          slug: "การ์ตูน",
        },
      ],
      timestamp: "1720592100000",
    },
    {
      topic_id: 42832612,
      title:
        "ตามหลักร่างกายและจิตวิทยาเราสามารถฝึกจิตให้นอนหลับชินกับเสียงคนปิดประตูเสียงดังในหอพักได้ไหมคะ",
      topic_type: 3,
      created_time: "2024-07-09T13:39:45Z",
      views_count: 861,
      comments_count: 40,
      votes_count: 0,
      author: {
        id: 392226,
        name: "ไทยสเปน",
        avatar: {
          large: "https://ptcdn.info/images/avatar_member_default.png",
          medium: "https://ptcdn.info/images/avatar_member_default.png",
          small: "https://ptcdn.info/images/avatar_member_default.png",
        },
        slug: "/profile/392226",
      },
      tags: [
        {
          name: "หอพัก",
          slug: "หอพัก",
        },
        {
          name: "ปฏิบัติธรรม",
          slug: "ปฏิบัติธรรม",
        },
        {
          name: "สุขภาพจิต",
          slug: "สุขภาพจิต",
        },
        {
          name: "มลพิษทางเสียง",
          slug: "มลพิษทางเสียง",
        },
        {
          name: "สุขภาพกายผู้สูงอายุ",
          slug: "สุขภาพกายผู้สูงอายุ",
        },
      ],
      timestamp: "1720591200000",
    },
    {
      topic_id: 42832013,
      title:
        "กรมอุตุฯ คาดหมายลักษณะอากาศประเทศไทย วันที่๙-๑๕กรกฎาคม ยังคงมีฝนฟ้าคะนอง และมีฝนตกหนักมากบางพื้นที่",
      topic_type: 1,
      created_time: "2024-07-09T08:51:39Z",
      thumbnail_url:
        "https://ptcdn.info/pick/588/000/000/lye68ifiiDaOjtx4tak-s.jpg",
      views_count: 658,
      comments_count: 19,
      votes_count: 2,
      author: {
        id: 196472,
        name: "ต้นโพธิ์ต้นไทร",
        avatar: {
          original:
            "http://p.ptcdn.info/080/000/000/196472_8212739817_-------------_o.jpg",
          large:
            "https://p.ptcdn.info/080/000/000/196472_8212739817_-------------_l.jpg",
          medium:
            "https://p.ptcdn.info/080/000/000/196472_8212739817_-------------_m.jpg",
          small:
            "https://p.ptcdn.info/080/000/000/196472_8212739817_-------------_s.jpg",
        },
        slug: "/profile/196472",
      },
      tags: [
        {
          name: "ภูมิศาสตร์",
          slug: "ภูมิศาสตร์",
        },
        {
          name: "ป้องกันน้ำท่วมบ้าน",
          slug: "ป้องกันน้ำท่วมบ้าน",
        },
        {
          name: "อนุรักษ์สิ่งแวดล้อม",
          slug: "อนุรักษ์สิ่งแวดล้อม",
        },
        {
          name: "เที่ยวทะเล",
          slug: "เที่ยวทะเล",
        },
        {
          name: "พยากรณ์อากาศ",
          slug: "พยากรณ์อากาศ",
        },
      ],
      timestamp: "1720590300000",
    },
    {
      topic_id: 42833207,
      title:
        'แบ่งปันเมนู "Homemade Mascapone cheese cake" หน้าไหม้แตก กินคู่กับ Blueberry sauce',
      topic_type: 1,
      created_time: "2024-07-10T00:14:22Z",
      thumbnail_url:
        "https://ptcdn.info/pick/588/000/000/lyf37vmuiA8OnOylx54-s.jpg",
      views_count: 434,
      comments_count: 27,
      votes_count: 5,
      author: {
        id: 455220,
        name: "fillerneck",
        avatar: {
          original:
            "https://p.ptcdn.info/549/015/000/455220_17097978430517_o.jpg",
          large: "https://p.ptcdn.info/549/015/000/455220_17097978430517_l.jpg",
          medium:
            "https://p.ptcdn.info/549/015/000/455220_17097978430517_m.jpg",
          small: "https://p.ptcdn.info/549/015/000/455220_17097978430517_s.jpg",
        },
        slug: "/profile/455220",
      },
      tags: [
        {
          name: "เบเกอรี่",
          slug: "เบเกอรี่",
        },
      ],
      timestamp: "1720588500000",
    },
  ];

  const getClassName = (index: number) => {
    if (windowSize.width > 768) {
      if (index === 0) return "big";
      if (index % 3 === 0) return "horizontal";
      if (index % 7 === 0) return "vertical";
      if (index % 5 === 0) return "big";
    }

    return "";
  };

  const [windowSize, setWindowSize] = useState<any>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Function to handle resizing
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return (
    <div className="w-full h-auto flex flex-col mt-10   ">
      <div className="bg-[#1f1d33] h-[70px] text-start items-start flex flex-col rounded-xl w-auto p-2">
        <span className="items-start text-left flex justify-start text-[#FBC02D] pt-2 pl-2 font-bold">
          Memory
        </span>
        <span className="items-start text-left flex justify-start text-[#ffffff8a]  text-[12px] pl-2 font-bold">
          ความทรงจำทั้งหมดของคุณ
        </span>
      </div>

      <div className="container mt-4 !w-auto">
        {data?.map((item: IDataHistory, index: number) => {
          return (
            item?.thumbnail_url && (
              <div
                className={
                  getClassName(index) +
                  '  relative  w-full overflow-auto text-white p-2 text-start items-start flex  gap-1 justify-start rounded-xl cursor-pointer hover:border-b-2 hover:shadow-lg hover:scale-110  transition delay-150 duration-300 ease-in-out"'
                }
                key={item?.topic_id + index}
              >
                <div className="opacity-0 hover:opacity-100 p-2 duration-300 absolute inset-0 z-10 flex justify-end items-end text-2xl line-clamp-1  text-white font-semibold">
                  <span className="bg-[#0000002f] duration-300">
                    {item?.title}
                  </span>
                </div>
                <Image
                  title="mammals"
                  src={item?.thumbnail_url}
                  alt={item?.title + index}
                  fill
                  className="rounded-2xl object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
                <FontAwesomeIcon
                  className="absolute right-2 top-2" // Positioned at the bottom-right
                  icon={faHeart}
                  size="2x"
                  style={{ color: "#dc1e1e" }}
                />
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}
const IconComment = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="20"
    height="20"
    color="#e9e5f666"
    fill="none"
  >
    <path
      d="M7.5 12H13.5M7.5 8H10.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 20C9.55038 20.8697 10.8145 21.4238 12.2635 21.5188C13.4052 21.5937 14.5971 21.5936 15.7365 21.5188C16.1288 21.4931 16.5565 21.4007 16.9248 21.251C17.3345 21.0845 17.5395 21.0012 17.6437 21.0138C17.7478 21.0264 17.8989 21.1364 18.2011 21.3563C18.7339 21.744 19.4051 22.0225 20.4005 21.9986C20.9038 21.9865 21.1555 21.9804 21.2681 21.7909C21.3808 21.6013 21.2405 21.3389 20.9598 20.8141C20.5706 20.0862 20.324 19.2529 20.6977 18.5852C21.3413 17.6315 21.8879 16.5021 21.9678 15.2823C22.0107 14.6269 22.0107 13.9481 21.9678 13.2927C21.9146 12.4799 21.7173 11.7073 21.4012 11"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.345 17.4868C15.9006 17.2526 18.7328 14.4069 18.9658 10.8344C19.0114 10.1353 19.0114 9.41131 18.9658 8.71219C18.7328 5.13968 15.9006 2.29401 12.345 2.05985C11.132 1.97997 9.86553 1.98013 8.65499 2.05985C5.09943 2.29401 2.26725 5.13968 2.0342 8.71219C1.9886 9.41131 1.9886 10.1353 2.0342 10.8344C2.11908 12.1356 2.69992 13.3403 3.38372 14.3576C3.78076 15.0697 3.51873 15.9586 3.10518 16.735C2.807 17.2948 2.65791 17.5747 2.77762 17.7769C2.89732 17.9791 3.16472 17.9856 3.69951 17.9985C4.75712 18.024 5.47028 17.7269 6.03638 17.3134C6.35744 17.0788 6.51798 16.9615 6.62862 16.9481C6.73926 16.9346 6.957 17.0234 7.39241 17.2011C7.78374 17.3608 8.23812 17.4593 8.65499 17.4868C9.86553 17.5665 11.132 17.5666 12.345 17.4868Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

const IconVote = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="20"
    height="20"
    color="#e9e5f666"
    fill="none"
  >
    <path
      d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const IconView = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="20"
    height="20"
    color="#e9e5f666"
    fill="none"
  >
    <path
      d="M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);
export default PickView;
