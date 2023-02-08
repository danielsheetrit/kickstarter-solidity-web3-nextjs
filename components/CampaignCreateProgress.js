export default function CampaignCreateProgress() {




}

const progressUi = (status) => {
    const output = {
      progress: { error: true },
      txt: 'Something went wrong, try again later',
    };

    switch (status) {
      case 'loading':
        output.progress = { active: true };
        output.txt = (
          <p>
            After approve Transaction in Metamask <br /> It could take
            approximately up to 15 seconds
          </p>
        );
        break;
      case 'complete':
        output.progress = { success: true };
        output.txt = (
          <p>
            Transaction successfully completed <br /> the campaign is availbe
            under Campaigns tab
          </p>
        );
        break;
      default:
        break;
    }

    return (
      <Progress style={{ width: 300 }} percent={100} {...output.progress}>
        {output.txt}
      </Progress>
    );
  };