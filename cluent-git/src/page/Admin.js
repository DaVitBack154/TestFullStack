import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import { GrDocumentPerformance } from 'react-icons/gr';
import { Table } from 'antd';
import axios from 'axios';

const AdminComponent = styled.div`
  .adminpage {
    display: flex;
    .nav {
      width: 100%;
      background-color: #f5f6fb;
      .groupbox {
        display: flex;
        justify-content: space-evenly;
        margin-top: 50px;

        .box1,
        .box2,
        .box3,
        .box4 {
          width: 18%;
          background-color: #fff;
          border: 1px solid black;
          display: flex;

          .textbox1 {
            width: 50%;
            padding: 10px 0px;
            .numberbox {
              font-size: 40px;
              text-align: center;
            }
            .msg {
              font-size: 12px;
              text-align: center;
            }
          }
          .iconnumber {
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;

            .icn {
              font-size: 40px;
              color: #fff;
              /* margin-right: 20px; */
            }
          }
        }
      }
      .grouptable {
        padding: 0px 25px;
        margin-top: 40px;
      }
    }
  }
`;

export default function Admin() {
  const [data, setData] = useState(null);
  const [report, setReport] = useState(null);

  const column = [
    {
      title: 'ชื่อ',
      dataIndex: 'name',
    },
    {
      title: 'นามสกุล',
      dataIndex: 'surname',
    },
    {
      title: 'เพศ',
      dataIndex: 'gender',
    },
    {
      title: 'อายุ',
      dataIndex: 'old',
    },
    {
      title: 'อีเมล',
      dataIndex: 'email',
    },
    {
      title: 'หมายเลขโทรศัพท์',
      dataIndex: 'phone',
    },
    {
      title: 'จังหวัดที่อยู่ปัจจุบัน',
      dataIndex: 'province',
    },
    {
      title: 'สาขา',
      dataIndex: 'branch',
    },
  ];

  useEffect(() => {
    const init = async () => {
      let tableData = await axios.get('http://localhost:5100/api/getuser', {
        withCredentials: true,
      });
      if (tableData?.data?.status) {
        setData(tableData.data.data);
      }

      let reportdata = await axios.get('http://localhost:5100/api/report', {
        withCredentials: true,
      });
      if (reportdata?.data?.status) {
        setReport(reportdata.data.data);
      }
    };
    init();
  }, []);

  // const handleClick = () => {
  //   console.log('dfdfdf');
  // };

  return (
    <AdminComponent>
      <div className="adminpage">
        <Sidebar className="sli" />
        <div className="nav">
          <Navbar />
          <div className="groupbox">
            <div className="box1">
              <div className="textbox1">
                <div className="numberbox">{report?.a || 0}</div>
                <div className="msg">สาขา A</div>
              </div>

              <div className="iconnumber">
                <GrDocumentPerformance className="icn" />
              </div>
            </div>
            <div className="box2">
              <div className="textbox1">
                <div className="numberbox">{report?.b || 0}</div>
                <div className="msg">สาขา B</div>
              </div>

              <div className="iconnumber">
                <GrDocumentPerformance className="icn" />
              </div>
            </div>
            <div className="box3">
              <div className="textbox1">
                <div className="numberbox">{report?.c || 0}</div>
                <div className="msg">สาขา C</div>
              </div>

              <div className="iconnumber">
                <GrDocumentPerformance className="icn" />
              </div>
            </div>
            <div className="box4">
              <div className="textbox1">
                <div className="numberbox">{report?.total || 0}</div>
                <div className="msg">รวมทั้งหมด</div>
              </div>

              <div className="iconnumber">
                <GrDocumentPerformance className="icn" />
              </div>
            </div>
          </div>
          <div className="grouptable">
            <div className="table">
              <Table columns={column} dataSource={data} rowKey={(d) => d.id} />
            </div>
          </div>
        </div>
      </div>
    </AdminComponent>
  );
}
