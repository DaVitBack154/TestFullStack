import React from 'react';
import styled from 'styled-components';
import { FiShoppingCart } from 'react-icons/fi';
import { Checkbox, Form, Input, Select } from 'antd';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import swal from 'sweetalert2';
import axios from 'axios';

const AppComponent = styled.div`
  /* ==================stye com1=================== */
  .bg1 {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 30px 0px;

    .imgbg {
      width: 85%;
      height: 550px;
      border-radius: 10px;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
  }
  @media screen and (max-width: 480px) {
    .bg1 {
      width: 100%;
      height: auto;
      display: flex;

      .imgbg {
        width: 85%;
        height: auto;
        border-radius: 10px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      }
    }
  }

  /* ==================stye com1=================== */

  /* ==================stye com2=================== */
  .border-bg2 {
    width: 85%;
    border: 1px solid #b2d233;
    margin: 0 auto;
    .group-box {
      width: 100%;
      display: flex;
      background-color: #ffff;
      margin: 0 auto;

      .box1 {
        width: 50%;
        display: flex;
        justify-content: end;
        align-items: center;
        padding: 20px 0px;
        .apple {
          width: 500px;
        }
      }
      .box2 {
        width: 50%;
        color: black;

        .title {
          margin-top: 50px;
          color: #d2337f;
        }
        .title2 {
          position: relative;
          top: -15px;
        }
        .contentbody {
          position: relative;
          top: -30px;
        }

        .priceall {
          .thb {
            width: 100%;
            font-size: 20px;
            display: flex;

            .numberpri {
              font-size: 30px;
              font-weight: 700;
              color: #b2d233;
              position: relative;
              top: -10px;
            }
          }
          .thb2 {
            color: #9999;
            margin-bottom: 20px;
          }
          .btnsell {
            background-color: #b2d233;
            border: none;
            width: 150px;
            padding: 8px;
            border-radius: 5px;
            cursor: pointer;
            .iconsel {
              position: relative;
              left: -10px;
              font-weight: bold;
              color: black;
              font-size: 15px;
            }
          }
        }
      }
    }

    .group-point {
      width: 100%;
      flex-direction: column;
      .headbp {
        width: 100%;
        text-align: center;
        font-size: 40px;
        font-weight: 600;
        margin-bottom: 10px;
      }
      .borderbp {
        display: flex;
        justify-content: space-evenly;
        .bp1,
        .bp2,
        .bp3,
        .bp4 {
          width: 20%;
          background-color: #f0f0f0;
          border-radius: 5px;
          margin-bottom: 30px;
          .groupicon {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .icon1 {
            padding: 25px 0px;
            width: 70px;
          }
          .bodyconten1 {
            text-align: center;
            margin-bottom: 20px;
            .t1 {
              color: #b2d233;
              font-weight: bold;
            }
          }
        }
      }
      .btn-produc {
        width: 100%;
        text-align: center;
        .btnconment {
          background-color: #fff;
          border: 2px solid #b2d233;
          padding: 5px;
          width: 150px;
          margin-bottom: 20px;
          border-radius: 10px;
          cursor: pointer;
        }
      }
    }
  }
  @media screen and (max-width: 480px) {
    .border-bg2 {
      width: 85%;
      border: 1px solid #b2d233;
      margin: 0 auto;
      .group-box {
        width: 100%;
        display: flex;
        background-color: #ffff;
        margin: 0 auto;

        .box1 {
          width: 50%;
          display: flex;
          justify-content: end;
          align-items: center;
          padding: 20px 0px;
          .apple {
            width: 100%;
            height: auto;
          }
        }
        .box2 {
          width: 50%;
          color: black;
          padding: 0px 10px;
          .title {
            margin-top: 50px;
            color: #d2337f;
            font-size: 20px;
          }
          .title2 {
            position: relative;
            top: -15px;
            font-size: 25px;
          }
          .contentbody {
            position: relative;
            top: -30px;
            font-size: 13px;
          }

          .priceall {
            .thb {
              width: 100%;
              font-size: 14px;
              display: flex;

              .numberpri {
                font-size: 25px;
                font-weight: 700;
                color: #b2d233;
                position: relative;
                top: -10px;
              }
            }
            .thb2 {
              color: #9999;
              margin-bottom: 20px;
            }
            .btnsell {
              background-color: #b2d233;
              border: none;
              width: 150px;
              padding: 8px;
              border-radius: 5px;
              cursor: pointer;
              .iconsel {
                position: relative;
                left: -10px;
                font-weight: bold;
                color: black;
                font-size: 15px;
              }
            }
          }
        }
      }

      .group-point {
        width: 100%;
        flex-direction: column;
        .headbp {
          width: 100%;
          text-align: center;
          font-size: 25px;
          font-weight: 600;
          margin-bottom: 10px;
        }
        .borderbp {
          display: flex;
          justify-content: space-evenly;
          .bp1,
          .bp2,
          .bp3,
          .bp4 {
            width: 22%;
            background-color: #f0f0f0;
            border-radius: 5px;
            margin-bottom: 30px;
            .groupicon {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .icon1 {
              padding: 25px 0px;
              width: 30px;
            }
            .bodyconten1 {
              text-align: center;
              margin-bottom: 20px;
              font-size: 8px;
              padding: 0px 10px;
              .t1 {
                color: #b2d233;
                font-weight: bold;
                font-size: 10px;
              }
            }
          }
        }
        .btn-produc {
          width: 100%;
          text-align: center;
          .btnconment {
            background-color: #fff;
            border: 2px solid #b2d233;
            padding: 5px;
            width: 150px;
            margin-bottom: 20px;
            border-radius: 10px;
            cursor: pointer;
          }
        }
      }
    }
  }
  /* ==================stye com2=================== */

  /* ==================stye com3=================== */
  .form {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;

    .formregis {
      width: 85%;
      background-image: url('/wld.jpg');
      background-repeat: no-repeat;
      -webkit-background-size: cover;
      background-size: cover;
      padding: 20px 0px;

      .head {
        text-align: center;
        color: #c3ea40;
        margin-top: 10px;
      }

      .gbrow1 {
        width: 100%;
        display: flex;
        justify-content: space-evenly;

        .row1 {
          width: 48%;
        }
      }
      .gbrow2,
      .gbrow3,
      .gbrow4 {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        .row2,
        .row3,
        .row4 {
          width: 48%;
        }
      }
      .radio {
        width: 100%;

        .formradio {
          margin-left: 20px;
        }
        .check {
          position: relative;
          top: 20px;
        }
      }
      .btn-confirmt {
        width: 100%;
        text-align: center;
        .btnc {
          width: 120px;
          background: linear-gradient(#ebff00, #00eba4);
          border: none;
          border-radius: 10px;
          padding: 5px;
          font-weight: bold;
          cursor: pointer;
        }
      }
      label {
        color: #fff;
      }
      Input {
        border: 2px solid #a1c708;
      }
    }
  }
  @media screen and (max-width: 480px) {
    .form {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-bottom: 10px;

      .formregis {
        width: 85%;
        background-image: url('/wld.jpg');
        background-repeat: no-repeat;
        -webkit-background-size: cover;
        background-size: cover;
        padding: 20px 0px;

        .forminput {
          padding: 0px 5px;
        }

        .head {
          text-align: center;
          font-size: 9px;
          color: #c3ea40;
          margin-top: 10px;
        }

        .gbrow1 {
          width: 100%;
          display: flex;
          justify-content: space-evenly;

          .row1 {
            width: 48%;
          }
        }
        .gbrow2,
        .gbrow3,
        .gbrow4 {
          width: 100%;
          display: flex;
          justify-content: space-evenly;
          .row2,
          .row3,
          .row4 {
            width: 48%;
          }
        }
        .radio {
          width: 100%;

          .formradio {
            margin-left: 20px;
            .text-radio {
              font-size: 12px;
            }
          }
        }
        .btn-confirmt {
          width: 100%;
          text-align: center;
          .btnc {
            width: 120px;
            background: linear-gradient(#ebff00, #00eba4);
            border: none;
            border-radius: 10px;
            padding: 5px;
            font-weight: bold;
            cursor: pointer;
          }
        }
        label {
          color: #fff;
        }
        Input {
          border: 2px solid #a1c708;
        }
      }
    }
  }
  /* ==================stye com3=================== */
`;

export default function Landing() {
  const [form] = Form.useForm();
  const history = useNavigate();

  let checkBox = 0;

  const onFinish = async (values) => {
    let databox = values;
    databox['accep'] = checkBox;
    console.log('fffff', values);
    let result = await axios.post(
      'http://localhost:5100/api/register',
      values,
      {
        withCredentials: true,
      }
    );
    console.log('Test', result.data.status);
    if (result.data.status) {
      swal
        .fire({
          title: '',
          text: result.data.message,
          icon: 'success',
          confirmButtonText: 'X',
        })
        .then((result) => {
          if (result.isConfirmed) {
            history(window.location.reload(true));
          }
        });
    }
  };

  return (
    <AppComponent>
      {/* ===================com1========================== */}
      <div className="bg1">
        <img src="bg2.jpg" alt="" className="imgbg" />
      </div>
      {/* ===================com1========================== */}

      {/* ===================com2========================== */}
      <div className="border-bg2">
        <div className="group-box">
          <div className="box1">
            <img src="apple.jpg" alt="" className="apple" />
          </div>
          <div className="box2">
            <h3 className="title">NEW DEAL!</h3>
            <h1 className="title2">IPHONE 11 5G</h1>
            <div className="contentbody">
              <p>
                สัมผัสภาพถ่ายคุณภาพยอดเยี่ยมอย่างง่ายดายด้วย AI ขั้นสูง
                และกล้องคู่ความละเอียดสูง 48MP <br />
                ลื่นไหลกว่าที่เคยด้วยเทคโนโลยี RAM Expansion
                พร้อมจัดเก็บข้อมูลได้เยอะจุใจกับ ROM ขนาดใหญ่ รองรับสัญญาณ5G
                หน้าจอ 90Hz
              </p>
              <div className="priceall">
                <div className="thb">
                  เริ่มต้นเพียง&nbsp;&nbsp;
                  <div className="numberpri">11,000</div>&nbsp;&nbsp;&nbsp;THB
                </div>
                <div className="thb2">ราคาปกติ 9,000 THB</div>
                <div>
                  <button className="btnsell">
                    <FiShoppingCart className="iconsel" />
                    สั่งซื้อออนไลน์
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="group-point">
          <div className="headbp">จุดเด่นของสินค้า</div>
          <div className="borderbp">
            <div className="bp1">
              <div className="groupicon">
                <img
                  src="https://store.ais.co.th/media/catalog/category/SIM_1.png"
                  className="icon1"
                  alt="nosimple"
                />
              </div>
              <div className="bodyconten1">
                <div className="t1">ชิบประมวลผล</div>
                <div>MediaTek Deimensity 810</div>
                <div>(รองรับสัญญาณ5G)</div>
              </div>
            </div>
            <div className="bp2">
              <div className="groupicon">
                <img
                  src="https://store.ais.co.th/media/catalog/category/SIM_1.png"
                  className="icon1"
                  alt=""
                />
              </div>
              <div className="bodyconten1">
                <div className="t1">แรม/ความจุ</div>
                <div>Ram 6GB + Rom 128GB</div>
                <div>(สามารถ Ram Expansion</div>
                <div>เพิ่มได้ถึง +5GB)</div>
              </div>
            </div>
            <div className="bp3">
              <div className="groupicon">
                <img
                  src="https://store.ais.co.th/media/catalog/category/SIM_1.png"
                  className="icon1"
                  alt=""
                />
              </div>
              <div className="bodyconten1">
                <div className="t1">แบตเตอรรี่</div>
                <div>5000mAh with 33W</div>
                <div>SuperVOOC (ชาร์จเต็ม</div>
                <div>100% ภายใน 68 นาที)</div>
              </div>
            </div>
            <div className="bp4">
              <div className="groupicon">
                <img
                  src="https://store.ais.co.th/media/catalog/category/SIM_1.png"
                  className="icon1"
                  alt=""
                />
              </div>
              <div className="bodyconten1">
                <div className="t1">จอภาพ</div>
                <div>90Hz refresh rate</div>
                <div>+ Eye care mode</div>
              </div>
            </div>
          </div>
          <div className="btn-produc">
            <button className="btnconment">ข้อมูลสินค้าเพิ่มเติม</button>
          </div>
        </div>
      </div>
      {/* ===================com2========================== */}
      <br />

      {/* ===================com3========================== */}
      <div className="form">
        <div className="formregis">
          <div className="head">
            <h1>ลงทะเบียนแสดงความสนใจสั่งซื้อผลิตภัณฑ์</h1>
          </div>
          <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
            className="forminput"
          >
            <div className="gbrow1">
              <Form.Item
                label="ชื่อ"
                className="row1"
                name={'name'}
                rules={[
                  {
                    required: true,
                    message: 'กรุณากรอกข้อมูล',
                  },
                ]}
              >
                <Input placeholder="กรุณาแจ้งชื่อ" />
              </Form.Item>

              <Form.Item
                label="นามสกุล"
                className="row1"
                name={'surname'}
                rules={[
                  {
                    required: true,
                    message: 'กรุณากรอกข้อมูล',
                  },
                ]}
              >
                <Input placeholder="กรุณาแจ้งนามสกุล" />
              </Form.Item>
            </div>

            <div className="gbrow2">
              <Form.Item
                label="เพศ"
                className="row2"
                name={'gender'}
                rules={[
                  {
                    required: true,
                    message: 'กรุณากรอกข้อมูล',
                  },
                ]}
              >
                <Input placeholder="กรุณาแจ้งเพศ" />
              </Form.Item>

              <Form.Item
                label="อายุ"
                className="row2"
                name={'old'}
                rules={[
                  {
                    required: true,
                    message: 'กรุณากรอกข้อมูล',
                  },
                ]}
              >
                <Input placeholder="กรุณาแจ้งอายุ" />
              </Form.Item>
            </div>

            <div className="gbrow3">
              <Form.Item
                label="อีเมล"
                className="row3"
                name={'email'}
                rules={[
                  {
                    required: true,
                    message: 'กรุณากรอกข้อมูล',
                  },
                ]}
              >
                <Input placeholder="กรุณาแจ้งอีเมล" />
              </Form.Item>

              <Form.Item
                label="หมายเลขโทรศัพท์"
                className="row3"
                name={'phone'}
                rules={[
                  {
                    required: true,
                    message: 'กรุณาแจ้งหมายเลขโทรศัพท์',
                  },
                ]}
              >
                <Input placeholder="กรุณาแจ้งหมายเลขโทรศัพท์" />
              </Form.Item>
            </div>

            <div className="gbrow4">
              <Form.Item
                label="จังหวัดที่อยู่ปัจจุบัน"
                className="row4"
                name={'province'}
                rules={[
                  {
                    required: true,
                    message: 'กรุณากรอกข้อมูล',
                  },
                ]}
              >
                <Input placeholder="กรุณาแจ้งจังหวัดที่อยู่ปัจจุบัน" />
              </Form.Item>

              <Form.Item
                className="row4"
                label="สาขาที่จอง"
                name={'branch'}
                rules={[
                  {
                    required: true,
                    message: 'กรุณาเลือกสาขา',
                  },
                ]}
              >
                <Select className="" placeholder="กรุณาเลือก">
                  <Select.Option value={'a'}>สาขา1</Select.Option>
                  <Select.Option value={'b'}>สาขา2</Select.Option>
                  <Select.Option value={'c'}>สาขา3</Select.Option>
                </Select>
              </Form.Item>
            </div>

            <div className="radio">
              <Form.Item className="formradio">
                <Checkbox
                  className="check"
                  onChange={() => {
                    if (checkBox === 0) {
                      checkBox = 1;
                    } else {
                      checkBox = 0;
                    }
                    console.log('dfdfdffdfdf');
                  }}
                >
                  <div className="text-radio">
                    ข้าพเจ้าตกลงยอมรับเงื่อนไขการลงทะเบียนดังกล่าวข้างต้นโดยครบถ้วนแล้ว
                    และยินดีให้บริษัทฯจัดเก็บและรวบรวมข้อมูลของท่านไว้ได้ใน
                    ทางการค้าของบริษัก
                    และให้บริษัทฯสามารถแจ้งโปรโมชั่นหรีอสิทธิพิเศษ
                    ข่าวสารของบริษัทให้แก่ท่านผ่าน SMS หรือ Email ของท่านได้
                  </div>
                </Checkbox>
              </Form.Item>
            </div>

            <Form.Item className="form-button">
              <div className="btn-confirmt">
                <button className="btnc">ยืนยัน</button>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
      {/* ===================com3========================== */}
      <br />
    </AppComponent>
  );
}
