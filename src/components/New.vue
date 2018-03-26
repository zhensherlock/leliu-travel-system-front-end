<template>
  <div>
    <section>
      <h2 class="van-block__title">基本需求</h2>
      <van-cell-group>
        <van-cell
          title="车辆类型"
          :value="displayData.carTypeTitle"
          is-link
          @click="changeActionSheetState({ name: 'carTypeActionSheetShow', state: true })" />
        <van-actionsheet v-model="displayData.carTypeActionSheetShow" :actions="actions" cancel-text="取消" />

        <van-cell
          title="用车日期"
          :value="displayData.useCarDateTitle"
          is-link
          @click="changeActionSheetState({ name: 'useCarDateActionSheetShow', state: true })" />
        <van-actionsheet v-model="displayData.useCarDateActionSheetShow">
          <van-datetime-picker
            v-model="displayData.currentDate"
            :min-date="displayData.minDate"
            type="date"
            @cancel="changeActionSheetState({ name: 'useCarDateActionSheetShow', state: false })"
            @confirm="confirmUseCarDate"
          />
        </van-actionsheet>

        <van-cell
          title="详细时间"
          :value="displayData.useCarTimeTitle"
          is-link
          @click="changeActionSheetState({ name: 'useCarTimeActionSheetShow', state: true })" />
        <van-actionsheet v-model="displayData.useCarTimeActionSheetShow">
          <van-datetime-picker
            v-model="displayData.currentTime"
            type="time"
            @cancel="changeActionSheetState({ name: 'useCarTimeActionSheetShow', state: false })"
            @confirm="confirmUseCarTime"
          />
        </van-actionsheet>

        <van-cell title="成人数">
          <van-stepper v-model="formData.adultNumber" />
        </van-cell>

        <van-cell title="儿童数">
          <van-stepper v-model="formData.childNumber" />
        </van-cell>

        <van-cell
          title="出发地"
          value="请选择"
          is-link />

        <van-cell
          title="目的地"
          value="请选择"
          is-link />

      </van-cell-group>
    </section>

    <section>
      <h2 class="van-block__title">其他需求</h2>
      <van-cell-group>
        <van-field
          v-model="formData.remark"
          label="留言"
          type="textarea"
          placeholder="您是否有其他需求"
          rows="3"
          autosize
        />
      </van-cell-group>
    </section>

    <section style="padding: 10px; font-size: 14px;">
      <van-row gutter="20">
        <van-col span="12">
          <van-checkbox v-model="formData.syncSendEmail">同步发送邮件</van-checkbox>
        </van-col>
        <van-col span="12">
          <van-checkbox v-model="formData.contactMeFirst">优先联系我</van-checkbox>
        </van-col>
      </van-row>
    </section>

    <section class="van-edit__buttons">
      <van-button type="danger" size="large">请顾问联系我</van-button>
    </section>
  </div>
</template>

<script>
  import {
    Field,
    CellGroup,
    Cell,
    Actionsheet,
    DatetimePicker,
    Stepper,
    Checkbox,
    Row,
    Col,
    Button
  } from 'vant';
  import Moment from '@/common/moment';
  export default {
    name: 'New',
    data() {
      return {
        displayData: {
          carTypeActionSheetShow: false,
          carTypeTitle: '请选择车辆类型',
          useCarDateActionSheetShow: false,
          useCarDateTitle: '请选择',
          currentDate: new Date(),
          minDate: new Date(),
          useCarTimeActionSheetShow: false,
          useCarTimeTitle: '请选择',
          currentTime: '12:00'
        },
        formData: {
          adultNumber: 2,
          childNumber: 1,
          remark: '',
          syncSendEmail: false,
          contactMeFirst: true
        },
        actions: [
          {
            name: '紧凑型',
            callback: this.carTypeItemCallback
          },
          {
            name: '舒适型',
            callback: this.carTypeItemCallback
          },
          {
            name: '超大型',
            callback: this.carTypeItemCallback
          }
        ]
      };
    },
    methods: {
      changeActionSheetState(params) {
        this.displayData[params.name] = params.state;
      },
      carTypeItemCallback(item) {
        this.displayData.carTypeTitle = item.name;
        this.changeActionSheetState({
          name: 'carTypeActionSheetShow',
          state: false
        });
      },
      confirmUseCarDate(value) {
        this.displayData.useCarDateTitle = new Moment(value).format('YYYY-MM-DD');
        this.changeActionSheetState({
          name: 'useCarDateActionSheetShow',
          state: false
        });
      },
      confirmUseCarTime(value) {
        this.displayData.useCarTimeTitle = value;
        this.changeActionSheetState({
          name: 'useCarTimeActionSheetShow',
          state: false
        });
      }
    },
    components: {
      [Field.name]: Field,
      [CellGroup.name]: CellGroup,
      [Cell.name]: Cell,
      [Actionsheet.name]: Actionsheet,
      [DatetimePicker.name]: DatetimePicker,
      [Stepper.name]: Stepper,
      [Checkbox.name]: Checkbox,
      [Row.name]: Row,
      [Col.name]: Col,
      [Button.name]: Button
    }
  };
</script>

<style>
  .van-block__title {
    margin: 0;
    font-weight: 400;
    font-size: 14px;
    color: rgba(69,90,100,.6);
    padding: 20px 15px 15px;
  }
  .van-edit__buttons {
    padding: 20px 10px;
  }
</style>
