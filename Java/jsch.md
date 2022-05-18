<h1>JSch를 활용한 SFTP 파일 업로드</h1>

- 프로그램 개발시 서버, 클라이언트 통신뿐 아니라 파일을 업로드, 다운로드 기능이 필요할 경우가 있는데 이런 경우 FTP로 파일을 업로드, 다운로드를 합니다.

- FTP 업로드 필요정보

  1. 수신 서버의 정보(IP계정, PW, PORT 등등..)
  2. 수신 서버의 파일 저장경로
  3. 송신 측 파일 경로 <br/><br/>

```
- 예제 코드 사용방법


import java.util.Properties;

import com.jcraft.jsch.Channel;
import com.jcraft.jsch.ChannelSftp;
import com.jcraft.jsch.JSch;
import com.jcraft.jsch.Session;


< -- FTP server 접속 및 업로드 -- >

public class FTPTest {

	// 접속할 ip, port, username, password
	String sftpIp = "xxx.xxx.xxx.xxx";
	int sftpPort = xx;
	String sftpUsername = "username";
	String sftpPassword = "password";

	// 송신 파일 경로
	String localPath = "/User/Desktop/test.txt";

	// 수신 파일 경로
	String remotePath = "/home/remotedirectory/";



	public void sftpUploadTest() throws Exception
	{
		// JSch 객체 생성
		JSch jsch = new JSch();

		// 세션 객체 생성
		// 접속할 ip, port, username, password 설정
		Session session;
		session = jsch.getSession(sftpUsername, sftpIp, sftpPort);
		session.setPassword(sftpPassword);

		// ssh_config에 호스트 key없이 접속 가능하도록 property 설정
		Properties config = new Properties();
		config.put("StrictHostKeyChecking", "no");
		session.setConfig(config);

		// 접속
		session.connect();


		ChannelSftp channelSftp = null;
		Channel channel = null;

		try
		{
			// sftp 채널 오픈 & 연결
			channel = session.openChannel("sftp");
			channel.connect();

			channelSftp = (ChannelSftp) channel;
			channelSftp.put(localPath, remotePath);
		}
		catch(Exception e)
		{
			// 예외 처리
			//

		}
		finally
		{
			// 완료 후 접속 종료
			channelSftp.disconnect();
			channel.disconnect();
			session.disconnect();
		}
	}

}
```
